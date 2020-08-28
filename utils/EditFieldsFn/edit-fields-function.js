const getData = require("../get-data")
const postPutData = require("../post-put-data")
const headersData = require('../headers')
const body_fields = require('../../JsonFields/body-fields')
const deliveryHandler = require('../delivery-handler')
const logs = require('../../log/log')
const discountHandler = require('../discount-handler')
const clearData = require('../clear-data')

const editFieldsFunction = async (OrderUrl, dataArr, orderUrlArr, dataUserPhoneArr) => {
    try {
        const headers = headersData()
        const dataUser = await getData({headers, url: OrderUrl})
        const dataUserHref = dataUser.agent.meta.href // Ссылка на покупателя
        // const data_sum = dataUser.sum / 100

        const dataUserNamePhone = await getData({headers, url: dataUserHref})

        // Поиск данных в массиве данных, для информации с МС , если приходят первыми
        let phoneIndex = dataUserPhoneArr.findIndex((el) => el.phone === dataUserNamePhone.phone)

        // Если данных в массиве нет, то внести
        if (phoneIndex === -1) {
            dataUserPhoneArr.push(
                {
                    phone: dataUserNamePhone.phone,
                    data: OrderUrl
                })
        }

        // Поиск данных в массиве от тильда по номеру телефона
        let newData = dataArr.filter((el) => el.phone === dataUserNamePhone.phone)[0]

        if (newData) {
            dataUserPhoneArr.splice(phoneIndex, 1)

            // Add fields to the order.
            const bodyData = body_fields(newData.date, newData.address, newData.paymentSystem, newData.delivery,
                newData.promoCode, newData.country)
            const dataSetFields = await postPutData({headers, url: OrderUrl, method: 'put', body: bodyData})

            if (dataSetFields.errors) {
                console.log("dataSetFields")
                console.log(dataSetFields)
            }

            if (+newData.deliveryPrice !== 0 || newData.discountValue) {
                console.log('Вхожу в условие Скидки или Доставки')
                await discountHandler(newData, OrderUrl, headers)

                if (+newData.deliveryPrice !== 0) {
                    await deliveryHandler(newData, OrderUrl, headers)
                }
            }
            clearData(dataArr, newData, orderUrlArr, dataUserPhoneArr)
        } else {
            logs('', 'Данных в массиве не нашел, жду данных с Тильды')
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = editFieldsFunction


