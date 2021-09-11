import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveGroupsParticipantsItem = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: groupsParticipantsItemId, corporateEntityId, regionalEntityId, learningCommunityId, groupId } = item;

        const groupsParticipantsRequest = dispatch(
            getCollectionWhere('groupsParticipants', [
                ['corporateEntityId', '==', corporateEntityId],
                ['regionalEntityId', '==', regionalEntityId],
                ['learningCommunityId', '==', learningCommunityId],
                ['groupId', '==', groupId],
            ]),
        );

        return groupsParticipantsRequest.then(groupsParticipants => {
            if (groupsParticipants.length) {
                const found = groupsParticipants.filter(groupsParticipantsItem => {
                    if (groupsParticipantsItem.id === groupsParticipantsItemId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'El grupo que elegiste ya ha sido asignado a la comunidad de aprendizaje que has seleccionado.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveGroupsParticipantsItem;
