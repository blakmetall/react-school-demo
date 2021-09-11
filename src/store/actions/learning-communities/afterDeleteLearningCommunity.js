import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const afterDeleteLearningCommunity = docId => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = [];

            const updateInFacilitators = getFirebase()
                .firestore()
                .collection('facilitators')
                .where('learningCommunityId', '==', docId)
                .get()
                .then(snapshot => {
                    const facilitators = getItemsFromSnapshot(snapshot);

                    const updatesRequests = facilitators.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('facilitators')
                            .doc(doc.id)
                            .update({
                                learningCommunityId: '',
                                learningCommunityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            const updateInLearningCommunityGroups = getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .where('learningCommunityId', '==', docId)
                .get()
                .then(snapshot => {
                    const learningCommunityGroups = getItemsFromSnapshot(snapshot);

                    const updatesRequests = learningCommunityGroups.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('learningCommunityGroups')
                            .doc(doc.id)
                            .update({
                                learningCommunityId: '',
                                learningCommunityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            const updateInParticipants = getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .where('learningCommunityId', '==', docId)
                .get()
                .then(snapshot => {
                    const groupsParticipants = getItemsFromSnapshot(snapshot);

                    const updatesRequests = groupsParticipants.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('groupsParticipants')
                            .doc(doc.id)
                            .update({
                                learningCommunityId: '',
                                learningCommunityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            const updateInFacilitatorsGroups = getFirebase()
                .firestore()
                .collection('facilitatorsGroups')
                .where('learningCommunityId', '==', docId)
                .get()
                .then(snapshot => {
                    const facilitatorsGroups = getItemsFromSnapshot(snapshot);

                    const updatesRequests = facilitatorsGroups.map(doc => {
                        return getFirebase()
                            .firestore()
                            .collection('facilitatorsGroups')
                            .doc(doc.id)
                            .update({
                                learningCommunityId: '',
                                learningCommunityName: '--',
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

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

export default afterDeleteLearningCommunity;
