const nodemailer = require('nodemailer');
const path = require('path');

const currentEnv = process.env.NODE_ENV;
require('dotenv').config({ path: path.resolve(__dirname, `../.env.${currentEnv}`) });

function createTransport() {
    const { SENDGRID_HOST, SENDGRID_PORT, SENDGRID_SECURE, SENDGRID_AUTH_USER, SENDGRID_AUTH_PASS } = process.env;

    const transporter = nodemailer.createTransport({
        host: SENDGRID_HOST,
        port: SENDGRID_PORT,
        secure: SENDGRID_SECURE,
        auth: {
            user: SENDGRID_AUTH_USER,
            pass: SENDGRID_AUTH_PASS,
        },
    });

    return transporter;
}

module.exports = createTransport;
