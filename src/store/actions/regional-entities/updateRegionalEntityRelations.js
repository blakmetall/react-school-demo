import { promise } from '../../../helpers';

const updateRegionalEntityRelations = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            const batch = getFirebase()
                .firestore()
                .batch();

            const updatePromises = [];

            const updateInLearningCommunities = getFirebase()
                .firestore()
                .collection('learningCommunities')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('learningCommunities')
                            .doc(doc.id);

                        const data = {
                            regionalEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInFacilitators = getFirebase()
                .firestore()
                .collection('facilitators')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('facilitators')
                            .doc(doc.id);

                        const data = {
                            regionalEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInLearningCommunityGroups = getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('learningCommunityGroups')
                            .doc(doc.id);

                        const data = {
                            regionalEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInGroupsParticipants = getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('groupsParticipants')
                            .doc(doc.id);

                        const data = {
                            regionalEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            updatePromises.push(updateInLearningCommunities);
            updatePromises.push(updateInFacilitators);
            updatePromises.push(updateInLearningCommunityGroups);
            updatePromises.push(updateInGroupsParticipants);
            // update in assignations

            return Promise.all(updatePromises).then(() => {
                batch.commit().then(() => {
                    return promise();
                });
            });
        }

        return promise();
    };
};

export default updateRegionalEntityRelations;
