import validator from 'validator';

const validateCountry = item => {
    const { name, managerName, managerEmail } = item;

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    if (!managerName || validator.isEmpty(managerName, { ignore_whitespace: true })) {
        return false;
    }

    if (!managerEmail || validator.isEmpty(managerEmail, { ignore_whitespace: true }) || !validator.isEmail(managerEmail)) {
        return false;
    }

    return true;
};

export default validateCountry;
