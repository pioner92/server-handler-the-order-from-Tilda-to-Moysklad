const bodyDiscountPercent = require('../JsonFields/body-discount-percent');
const bodyDiscountMoney = require('../JsonFields/body-discount-money');
const postPutData = require('./post-put-data');
const getData = require('./get-data');

const discountHandler = async (newData, orderUrl, headers) => {
    const dataPosition = await getData({
        headers,
        url: `${orderUrl}/positions`,
    });
    let firstPositionPrice = +dataPosition.rows[0].price;

    if (newData.discountValue && newData.discountValue.includes('%')) {
        // Change the value of the discount in each position if the discount is%
        dataPosition.rows.map(async (position) => {
            const dataSetDiscount = await postPutData({
                headers,
                url: `${orderUrl}/positions/${position.id}`,
                method: 'put',
                body: bodyDiscountPercent(parseInt(newData.discountValue)),
            });
            console.log('dataSetDiscount');
            console.log(dataSetDiscount);
        });
        // for (const position of dataPosition.rows) {
        //     const dataSetDiscount = await postPutData({
        //         headers,
        //         url: `${orderUrl}/positions/${position.id}`,
        //         method: 'put',
        //         body: bodyDiscountPercent(parseInt(newData.discountValue)),
        //     });
        //     console.log('dataSetDiscount');
        //     console.log(dataSetDiscount);
        // }
    } else if (newData.discountValue && !newData.discountValue.includes('%') && +newData.deliveryPrice < 800) {
        if (dataPosition.rows[0].quantity > 1) {
            firstPositionPrice -= ((+newData.discountValue * 100) / dataPosition.rows[0].quantity);
        } else {
            firstPositionPrice -= (+newData.discountValue * 100);
        }

        const dataSetDiscount = await postPutData({
            headers,
            method: 'put',
            url: `${orderUrl}/positions/${dataPosition.rows[0].id}`,
            body: bodyDiscountMoney(parseFloat(firstPositionPrice)),
        });
        console.log('dataSetDiscount 2');
        console.log(dataSetDiscount);
    }
};

module.exports = discountHandler;
