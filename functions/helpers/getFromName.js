const path = require('path');

const currentEnv = process.env.NODE_ENV;
require('dotenv').config({ path: path.resolve(__dirname, `../.env.${currentEnv}`) });

function getFromName() {
    const { FROM_NAME } = process.env;

    return FROM_NAME;
}

module.exports = getFromName;
