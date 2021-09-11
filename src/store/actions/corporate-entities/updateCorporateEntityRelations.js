import { promise } from '../../../helpers';
import { updateManagersRelations } from '../general';

const updateCorporateEntityRelations = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            const { managerName, managerEmail } = item;

            const batch = getFirebase()
                .firestore()
                .batch();

            const updatePromises = [];

            const updateInCoursesAssignations = getFirebase()
                .firestore()
                .collection('coursesAssignations')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('coursesAssignations')
                            .doc(doc.id);

                        const data = {
                            corporateEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInRegionalEntities = getFirebase()
                .firestore()
                .collection('regionalEntities')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('regionalEntities')
                            .doc(doc.id);

                        const data = {
                            corporateEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInLearningCommunities = getFirebase()
                .firestore()
                .collection('learningCommunities')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('learningCommunities')
                            .doc(doc.id);

                        const data = {
                            corporateEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInFacilitators = getFirebase()
                .firestore()
                .collection('facilitators')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('facilitators')
                            .doc(doc.id);

                        const data = {
                            corporateEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInLearningCommunityGroups = getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('learningCommunityGroups')
                            .doc(doc.id);

                        const data = {
                            corporateEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInGroupsParticipants = getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('groupsParticipants')
                            .doc(doc.id);

                        const data = {
                            corporateEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            const updateInFacilitatorsGroups = getFirebase()
                .firestore()
                .collection('facilitatorsGroups')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('facilitatorsGroups')
                            .doc(doc.id);

                        const data = {
                            corporateEntityName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            updatePromises.push(dispatch(updateManagersRelations(managerName, managerEmail)));
            updatePromises.push(updateInCoursesAssignations);
            updatePromises.push(updateInRegionalEntities);
            updatePromises.push(updateInLearningCommunities);
            updatePromises.push(updateInFacilitators);
            updatePromises.push(updateInLearningCommunityGroups);
            updatePromises.push(updateInGroupsParticipants);
            updatePromises.push(updateInFacilitatorsGroups);

            return Promise.all(updatePromises).then(() => {
                batch.commit().then(() => {
                    return promise();
                });
            });
        }

        return promise();
    };
};

export default updateCorporateEntityRelations;
