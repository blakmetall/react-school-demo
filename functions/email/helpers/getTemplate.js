const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

function getTemplate(templateName) {
    const source = fs.readFileSync(path.join(__dirname, `../templates/${templateName}.hbs`), 'utf8');

    if (source) {
        const template = handlebars.compile(source);

        return template;
    }

    return undefined;
}

module.exports = getTemplate;
