const path = require('path');

const currentEnv = process.env.NODE_ENV;
require('dotenv').config({ path: path.resolve(__dirname, `../.env.${currentEnv}`) });

function getAppUrl() {
    const { APP_URL } = process.env;

    return APP_URL;
}

module.exports = getAppUrl;
