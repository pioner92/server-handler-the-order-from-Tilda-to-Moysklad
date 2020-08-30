const bodyDiscountMoney = require('../../JsonFields/body-discount-money');
const postPutData = require('../post-put-data');

const discountAmountHandler = async (headers, url, position, positionPrice) => {
    const dataSetDiscount = await postPutData({
        headers,
        method: 'put',
        url: `${url}/positions/${position.rows[0].id}`,
        body: bodyDiscountMoney(parseFloat(positionPrice)),
    });
    console.log('dataSetDiscount 2');
    console.log(dataSetDiscount);
};

module.exports = discountAmountHandler;
