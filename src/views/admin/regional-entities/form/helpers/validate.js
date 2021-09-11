import validator from 'validator';

const validateRegionalEntity = item => {
    const { corporateEntityId, name } = item;

    if (!corporateEntityId || validator.isEmpty(corporateEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    return true;
};

export default validateRegionalEntity;
