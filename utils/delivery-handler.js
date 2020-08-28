const postPutData = require('./post-put-data');
const bodyPositionDelivery = require('../JsonFields/body-position-delivery');

const deliveryHandler = async (newData, OrderUrl, headers) => {
    console.log('Вошел в условие доставки');
    let value = newData.deliveryPrice;

    if (+newData.deliveryPrice >= 800) {
        console.log('Доставка равно 800 или выше ');
        value = ((+newData.deliveryPrice - (+newData.discountValue)) * 100).toFixed(1);
    }
    await postPutData({
        headers,
        method: 'post',
        url: `${OrderUrl}/positions/`,
        body: bodyPositionDelivery(value),
    });
};

module.exports = deliveryHandler;
