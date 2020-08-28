const fetch = require('node-fetch');

const getData = async ({ headers, url }) => {
    try {
        const response = await fetch(url, {
            method: 'get',
            headers,
        });
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};

module.exports = getData;
