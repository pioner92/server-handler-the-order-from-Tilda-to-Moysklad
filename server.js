const express = require('express');
const fieldsFromTildaValidator = require('./utils/fields-from-tilda-validator');

const app = express();
// eslint-disable-next-line import/order
const bodyParser = require('body-parser');
const editFieldsFunction = require('./utils/EditFieldsFn/edit-fields-function');

const PORT = process.env.PORT || 3000;
const logs = require('./log/log');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataArr = []; // Данные с тильды
const orderUrlArr = []; // Ссылки из хуков для контроля дублей
const dataUserPhoneArr = []; // Данные с номерами из МС, для ожидания данных с Тильда

//  ---------------------------------
// Хук с Мой Склад
app.post('/hook', async (req, res) => {
    try {
        logs('', 'Пришли данные с МС', true);
        const orderUrl = req.body.events[0].meta.href; // Ссылка на заказа
        if (orderUrlArr.indexOf(orderUrl) === -1 && dataArr.length > 0) {
            orderUrlArr.push(orderUrl);
            // Запуск функции изменений полей
            await editFieldsFunction(orderUrl, dataArr, orderUrlArr, dataUserPhoneArr);
        }
        res.json('ok');
    } catch (e) {
        console.log(e);
    }
});

// Get order data with Tilda
app.post('/get_form', async (req, res) => {
    try {
        logs(req.body, 'Пришли данные с Тильда', true);
        const phone = req.body.phone || req.body.Phone;

        if (req.body.name) {
            dataArr.push({ ...fieldsFromTildaValidator(req) });
        }
        console.log('Теперь массив с данными от Тильда');
        console.log(dataArr);
        const phoneIndex = dataUserPhoneArr.findIndex((el) => el.phone === phone);

        if (phoneIndex !== -1) {
            logs('', 'Запуск функции изменения данных ------------->');
            await editFieldsFunction(dataUserPhoneArr[phoneIndex].data, dataArr,
                orderUrlArr, dataUserPhoneArr);
            logs('', 'Функция отработала ------------->');
        }
        res.json({ test: 'test' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

// app.put('/get_form', (req, res) => {
//     console.log(req.body)
//     console.log('ok')
//     res.json({message: 'ok'})
// })

app.listen(PORT, () => {
    console.log(`Вишу на порту ${PORT} !!!`);
});
