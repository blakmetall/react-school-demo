import validator from 'validator';

const validateLearningCommunity = item => {
    const { corporateEntityId, regionalEntityId, name } = item;

    if (!corporateEntityId || validator.isEmpty(corporateEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!regionalEntityId || validator.isEmpty(regionalEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    return true;
};

export default validateLearningCommunity;
