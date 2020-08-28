const fetch = require('node-fetch');

const postPutData = async ({
    method, headers, url, body,
// eslint-disable-next-line consistent-return
}) => {
    try {
        const response = await fetch(url, { method, headers, body: JSON.stringify(body) });
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};

module.exports = postPutData;
