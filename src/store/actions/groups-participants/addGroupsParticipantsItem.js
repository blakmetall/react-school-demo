import { promise } from '../../../helpers';
import { sendGroupsParticipantsInvitations, updateGroupsParticipantsList } from './index';
import { updateProfileManagementRelations } from '../general';

const addGroupsParticipantsItem = (item, participants) => {
    return (dispatch, getState, getFirebase) => {
        const updateMultipleProfilesRelations = () => {
            if (participants && participants.length) {
                const updateProfileManagementRequests = participants.map(participant => {
                    const { email } = participant;

                    return dispatch(
                        updateProfileManagementRelations({
                            email,
                        }),
                    );
                });

                return Promise.all(updateProfileManagementRequests).then(() => {
                    return promise();
                });
            }

            return promise();
        };

        return getFirebase()
            .firestore()
            .collection('groupsParticipants')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                const updateGroups = dispatch(updateGroupsParticipantsList(savedItem.id, participants));

                return updateGroups.then(() => {
                    const afterInvite = dispatch(sendGroupsParticipantsInvitations(savedItem, participants));

                    const afterUpdateProfileManagements = updateMultipleProfilesRelations();

                    return Promise.all([afterInvite, afterUpdateProfileManagements]).then(() => {
                        return promise(savedItem);
                    });
                });
            });
    };
};

export default addGroupsParticipantsItem;
