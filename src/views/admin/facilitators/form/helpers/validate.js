import validator from 'validator';

const validateFacilitator = item => {
    const { corporateEntityId, regionalEntityId, learningCommunityId } = item;

    if (!corporateEntityId || validator.isEmpty(corporateEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!regionalEntityId || validator.isEmpty(regionalEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!learningCommunityId || validator.isEmpty(learningCommunityId, { ignore_whitespace: true })) {
        return false;
    }

    return true;
};

export default validateFacilitator;
