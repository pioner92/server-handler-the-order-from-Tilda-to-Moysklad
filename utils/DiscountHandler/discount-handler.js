const getData = require('./get-data');
const firstPositionValidator = require('./first-position-validator');
const discountPercentHandler = require('./discount-percent-handler');
const discountAmountHandler = require('./discount-amount-handler');

const discountHandler = async (newData, orderUrl, headers) => {
    const dataPosition = await getData({
        headers,
        url: `${orderUrl}/positions`,
    });
    let firstPositionPrice = +dataPosition.rows[0].price;

    if (newData.discountValue && newData.discountValue.includes('%')) {
        // Change the value of the discount in each position if the discount is%
        discountPercentHandler(dataPosition, headers, orderUrl, newData);
    } else if (
        newData.discountValue
        && !newData.discountValue.includes('%')
        && +newData.deliveryPrice < 800) {
        // Change the value of the discount from amount money;
        firstPositionPrice = firstPositionValidator(dataPosition, firstPositionPrice, newData);
        await discountAmountHandler(headers, orderUrl, dataPosition, firstPositionPrice);
    }
};

module.exports = discountHandler;
