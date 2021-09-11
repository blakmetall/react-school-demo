import validator from 'validator';

const validateGroupsParticipantsItem = item => {
    const { corporateEntityId, regionalEntityId, learningCommunityId, groupId } = item;

    if (!corporateEntityId || validator.isEmpty(corporateEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!regionalEntityId || validator.isEmpty(regionalEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!learningCommunityId || validator.isEmpty(learningCommunityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!groupId || validator.isEmpty(groupId, { ignore_whitespace: true })) {
        return false;
    }

    return true;
};

export default validateGroupsParticipantsItem;
