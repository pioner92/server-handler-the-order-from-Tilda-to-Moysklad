const bodyDiscountPercent = require('../../JsonFields/body-discount-percent');
const postPutData = require('../post-put-data');

const discountPercentHandler = (positions, headers, url, newData) => {
    positions.rows.map(async (position) => {
        const dataSetDiscount = await postPutData({
            headers,
            url: `${url}/positions/${position.id}`,
            method: 'put',
            body: bodyDiscountPercent(parseInt(newData.discountValue)),
        });
        console.log('dataSetDiscount');
        console.log(dataSetDiscount);
    });
};

module.exports = discountPercentHandler;
