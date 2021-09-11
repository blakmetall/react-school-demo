const cors = require('cors');
const functions = require('firebase-functions');
const { createTransport, getAppUrl, getFromEmail } = require('../helpers');
const { getTemplate } = require('./helpers');

const corsHandler = cors({ origin: true });

const getEmailDescrition = (section, sectionName, sectionName2) => {
    if (section && sectionName) {
        if (section === 'country') {
            return `Has sido agregado como encargado del país '${sectionName}'`;
        }

        if (section === 'corporate-entity') {
            return `Has sido agregado como encargado de la entidad corporativa '${sectionName}'`;
        }

        if (section === 'regional-entity') {
            return `Has sido agregado como encargado de la entidad regional '${sectionName}'`;
        }

        if (section === 'learning-community') {
            return `Has sido agregado como encargado de la comunidad de aprendizaje '${sectionName}'`;
        }

        if (section === 'facilitator') {
            return `Has sido agregado como facilitador de la comunidad de aprendizaje '${sectionName}'`;
        }

        if (section === 'participant') {
            return `Has sido agregado como participante en el grupo '${sectionName}' de la comunidad de aprendizaje '${sectionName2}'`;
        }
    }

    return '';
};

const sendInvitation = functions.https.onRequest(async (req, res) => {
    corsHandler(req, res, () => {
        const template = getTemplate('invitation');
        const requestBody = (req.body && JSON.parse(req.body)) || {};

        const { email, token, section, sectionName, sectionName2 } = requestBody;

        if (template) {
            const transporter = createTransport();
            const fromEmail = getFromEmail();
            const content = getEmailDescrition(section, sectionName, sectionName2);
            const appUrl = getAppUrl();

            const emailConfig = {
                from: `School Demo <${fromEmail}>`,
                to: `<${email}>`,
                subject: 'SD | Invitación al sistema',
                html: template({
                    email,
                    token: token || '',
                    content,
                    appUrl,
                }),
            };

            // test deploy
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

module.exports = sendInvitation;
