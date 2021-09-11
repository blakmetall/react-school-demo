const cors = require('cors');
const functions = require('firebase-functions');
const { createTransport, getFromEmail } = require('../helpers');
const { getTemplate } = require('./helpers');

const corsHandler = cors({ origin: true });

const send = functions.https.onRequest(async (req, res) => {
    corsHandler(req, res, () => {
        const template = getTemplate('default');
        const requestBody = (req.body && JSON.parse(req.body)) || {};
        const { to, subject, content } = requestBody;

        if (template) {
            const transporter = createTransport();
            const fromEmail = getFromEmail();

            const emailConfig = {
                from: `<${fromEmail}>`,
                to,
                subject,
                html: template({
                    content,
                }),
            };

            transporter.sendMail(emailConfig, error => {
                if (error) {
                    res.send(error);
                } else {
                    res.send('Success');
                }
            });

            transporter.close();
        }
    });
});

module.exports = send;
