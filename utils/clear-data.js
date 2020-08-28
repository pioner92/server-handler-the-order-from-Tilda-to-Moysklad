const clearData = (dataArr, newData, orderUrlArr, dataUserPhoneArr) => {
    const ind = dataArr.findIndex((el) => el === newData);
    dataArr.splice(ind, 1);
    console.log('Удалил с массива данные о заказчике');
    console.log(dataArr);

    if (dataArr.length > 30) {
        dataArr.splice(0, 1);
    }
    // Очистка массива с заказами
    if (orderUrlArr.length > 20) {
        orderUrlArr.splice(0, 1);
    }
    if (dataUserPhoneArr.length > 20) {
        dataUserPhoneArr.splice(0, 1);
    }
};

module.exports = clearData;
