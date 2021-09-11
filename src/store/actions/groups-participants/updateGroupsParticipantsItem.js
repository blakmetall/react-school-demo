import { promise } from '../../../helpers';
import { sendGroupsParticipantsInvitations, updateGroupsParticipantsRelations, updateGroupsParticipantsList } from './index';
import { updateProfileManagementRelations } from '../general';

const updateGroupsParticipantsItem = (item, docId, participants, prevParticipants) => {
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

        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    const updatedRelated = dispatch(updateGroupsParticipantsRelations(item, docId));

                    return updatedRelated.then(() => {
                        const updateParticipants = dispatch(updateGroupsParticipantsList(savedItem.id, participants));

                        return updateParticipants.then(({ participantsSaved }) => {
                            const afterInvite = dispatch(
                                sendGroupsParticipantsInvitations(savedItem, participants, prevParticipants),
                            );

                            const afterUpdateProfileManagements = updateMultipleProfilesRelations();

                            return Promise.all([afterInvite, afterUpdateProfileManagements]).then(() => {
                                return promise({ savedItem, participantsSaved });
                            });
                        });
                    });
                });
        }

        return promise({ savedItem: undefined, participantsSaved: [] });
    };
};

export default updateGroupsParticipantsItem;
