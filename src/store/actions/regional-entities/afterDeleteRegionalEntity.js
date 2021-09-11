import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const afterDeleteRegionalEntity = docId => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = [];

            const deleteUsedLicenses = getFirebase()
                .firestore()
                .collection('licenses')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    const licensesToDelete = getItemsFromSnapshot(snapshot);

                    if (licensesToDelete.length) {
                        const deleteRequests = licensesToDelete.map(license => {
                            return getFirebase()
                                .firestore()
                                .collection('licenses')
                                .doc(license.id)
                                .delete();
                        });

                        console.log('deleted');
                        return Promise.all(deleteRequests);
                    }

                    return promise();
                });

            const updateInLearningCommunities = getFirebase()
                .firestore()
                .collection('learningCommunities')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    const learningCommunities = getItemsFromSnapshot(snapshot);

                    const updatesRequests = learningCommunities.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('learningCommunities')
                            .doc(doc.id)
                            .update({
                                regionalEntityId: '',
                                regionalEntityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            const updateInFacilitators = getFirebase()
                .firestore()
                .collection('facilitators')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    const facilitators = getItemsFromSnapshot(snapshot);

                    const updatesRequests = facilitators.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('facilitators')
                            .doc(doc.id)
                            .update({
                                regionalEntityId: '',
                                regionalEntityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            const updateInLearningCommunityGroups = getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    const learningCommunityGroups = getItemsFromSnapshot(snapshot);

                    const updatesRequests = learningCommunityGroups.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('learningCommunityGroups')
                            .doc(doc.id)
                            .update({
                                regionalEntityId: '',
                                regionalEntityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            const updateInParticipants = getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    const groupsParticipants = getItemsFromSnapshot(snapshot);

                    const updatesRequests = groupsParticipants.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('groupsParticipants')
                            .doc(doc.id)
                            .update({
                                regionalEntityId: '',
                                regionalEntityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            const updateInFacilitatorsGroups = getFirebase()
                .firestore()
                .collection('facilitatorsGroups')
                .where('regionalEntityId', '==', docId)
                .get()
                .then(snapshot => {
                    const facilitatorsGroups = getItemsFromSnapshot(snapshot);

                    const updatesRequests = facilitatorsGroups.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('facilitatorsGroups')
                            .doc(doc.id)
                            .update({
                                regionalEntityId: '',
                                regionalEntityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            asyncRequests.push(deleteUsedLicenses);
            asyncRequests.push(updateInLearningCommunities);
            asyncRequests.push(updateInFacilitators);
            asyncRequests.push(updateInLearningCommunityGroups);
            asyncRequests.push(updateInParticipants);
            asyncRequests.push(updateInFacilitatorsGroups);

            return Promise.all(asyncRequests).then(() => {
                return promise();
            });
        }

        return promise();
    };
};

export default afterDeleteRegionalEntity;
