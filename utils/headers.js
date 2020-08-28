const btoa = require('btoa');
const config = require('../config.json');

const headersData = () => {
    const user = { login: config.login, password: config.password };
    return ({
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${user.login}:${user.password}`)}`,
    });
};
module.exports = headersData;
