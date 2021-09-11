import { promise } from '../../../helpers';

const updateLearningCommunityGroupRelations = (groupName, groupId) => {
    return (dispatch, getState, getFirebase) => {
        if (groupName && groupId) {
            const batch = getFirebase()
                .firestore()
                .batch();

            const updatePromises = [];

            const updateInGroupsParticipants = getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .where('groupId', '==', groupId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('groupsParticipants')
                            .doc(doc.id);

                        const data = {
                            groupName: groupName || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            updatePromises.push(updateInGroupsParticipants);

            return Promise.all(updatePromises).then(() => {
                batch.commit().then(() => {
                    return promise();
                });
            });
        }

        return promise();
    };
};

export default updateLearningCommunityGroupRelations;
