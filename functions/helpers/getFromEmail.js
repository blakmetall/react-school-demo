const path = require('path');

const currentEnv = process.env.NODE_ENV;
require('dotenv').config({ path: path.resolve(__dirname, `../.env.${currentEnv}`) });

function getFromEmail() {
    const { FROM_EMAIL } = process.env;

    return FROM_EMAIL;
}

module.exports = getFromEmail;
