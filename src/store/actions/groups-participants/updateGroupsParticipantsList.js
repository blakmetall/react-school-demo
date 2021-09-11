import { promise } from '../../../helpers';
import { updateManagersRelations } from '../general';

const updateGroupsParticipantsList = (docId, participants) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = participants.map(participant => {
                const { name, email } = participant;

                return getFirebase()
                    .firestore()
                    .collection('participants')
                    .where('email', '==', email)
                    .where('groupsParticipantsId', '==', docId)
                    .get()
                    .then(searchSnapshot => {
                        const participantFound = !searchSnapshot.empty;

                        if (participantFound) {
                            const participantDocId = searchSnapshot.docs[0].id;

                            return getFirebase()
                                .firestore()
                                .collection('participants')
                                .doc(participantDocId)
                                .update({
                                    name,
                                    email,
                                })
                                .then(() => {
                                    return dispatch(updateManagersRelations(name, email)).then(() => {
                                        return promise({
                                            ...searchSnapshot.docs[0].data(),
                                            id: participantDocId,
                                            name,
                                            email,
                                        });
                                    });
                                });
                        }

                        const newParticipant = {
                            name,
                            email,
                            groupsParticipantsId: docId,
                        };

                        return getFirebase()
                            .firestore()
                            .collection('participants')
                            .add(newParticipant)
                            .then(docRef => {
                                return dispatch(updateManagersRelations(name, email)).then(() => {
                                    return promise({
                                        ...newParticipant,
                                        id: docRef.id,
                                    });
                                });
                            });
                    });
            });

            return Promise.all(asyncRequests).then(responses => {
                const participantsIds = responses.map(group => group.id);
                const participantsSaved = responses.filter(group => group.id);

                return getFirebase()
                    .firestore()
                    .collection('groupsParticipants')
                    .doc(docId)
                    .update({ participantsIds })
                    .then(() => {
                        return promise({ success: true, participantsSaved });
                    });
            });
        }

        return promise({ success: false, participantsSaved: [] });
    };
};

export default updateGroupsParticipantsList;
