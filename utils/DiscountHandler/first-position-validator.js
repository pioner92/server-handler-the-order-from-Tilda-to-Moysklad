const firstPositionValidator = (dataPosition, firstPositionPrice, newData) => {
    let data = '';
    if (dataPosition.rows[0].quantity > 1) {
        data = firstPositionPrice - ((+newData.discountValue * 100)
            / dataPosition.rows[0].quantity);
        return data;
    }
    data = firstPositionPrice - (+newData.discountValue * 100);
    return data;
};

module.exports = firstPositionValidator;
