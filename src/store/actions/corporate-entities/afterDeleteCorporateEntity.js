import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';
import { deleteFile } from '../firebase';

// eslint-disable-next-line
const afterDeleteCorporateEntity = (docId, corporateEntity) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = [];

            const updateInCourseAssignations = getFirebase()
                .firestore()
                .collection('coursesAssignations')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const coursesAssignations = getItemsFromSnapshot(querySnapshot);

                    if (coursesAssignations.length) {
                        const updateRequests = coursesAssignations.map(courseAssignation => {
                            return getFirebase()
                                .firestore()
                                .collection('coursesAssignations')
                                .doc(courseAssignation.id)
                                .update({ corporateEntityId: '', corporateEntityName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            const updateInRegionalEntities = getFirebase()
                .firestore()
                .collection('regionalEntities')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const regionalEntities = getItemsFromSnapshot(querySnapshot);

                    if (regionalEntities.length) {
                        const updateRequests = regionalEntities.map(regionalEntity => {
                            return getFirebase()
                                .firestore()
                                .collection('regionalEntities')
                                .doc(regionalEntity.id)
                                .update({ corporateEntityId: '', corporateEntityName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            const updateInLearningCommunities = getFirebase()
                .firestore()
                .collection('learningCommunities')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const learningCommunities = getItemsFromSnapshot(querySnapshot);

                    if (learningCommunities.length) {
                        const updateRequests = learningCommunities.map(learningCommunity => {
                            return getFirebase()
                                .firestore()
                                .collection('learningCommunities')
                                .doc(learningCommunity.id)
                                .update({ corporateEntityId: '', corporateEntityName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            const updateInFacilitators = getFirebase()
                .firestore()
                .collection('facilitators')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const facilitators = getItemsFromSnapshot(querySnapshot);

                    if (facilitators.length) {
                        const updateRequests = facilitators.map(facilitator => {
                            return getFirebase()
                                .firestore()
                                .collection('facilitators')
                                .doc(facilitator.id)
                                .update({ corporateEntityId: '', corporateEntityName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            const updateInGroupsParticipants = getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const groupsParticipants = getItemsFromSnapshot(querySnapshot);

                    if (groupsParticipants.length) {
                        const updateRequests = groupsParticipants.map(groupParticipan => {
                            return getFirebase()
                                .firestore()
                                .collection('groupsParticipants')
                                .doc(groupParticipan.id)
                                .update({ corporateEntityId: '', corporateEntityName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            const updateInFacilitatorsGroups = getFirebase()
                .firestore()
                .collection('facilitatorsGroups')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const facilitatorsGroups = getItemsFromSnapshot(querySnapshot);

                    if (facilitatorsGroups.length) {
                        const updateRequests = facilitatorsGroups.map(facilitatorGroup => {
                            return getFirebase()
                                .firestore()
                                .collection('facilitatorsGroups')
                                .doc(facilitatorGroup.id)
                                .update({ corporateEntityId: '', corporateEntityName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            const updateInLearningCommunityGroups = getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .where('corporateEntityId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const learningCommunityGroups = getItemsFromSnapshot(querySnapshot);

                    if (learningCommunityGroups.length) {
                        const updateRequests = learningCommunityGroups.map(learningCommunityGroup => {
                            return getFirebase()
                                .firestore()
                                .collection('learningCommunityGroups')
                                .doc(learningCommunityGroup.id)
                                .update({ corporateEntityId: '', corporateEntityName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            const deleteCorporateEntityFiles = () => {
                const { originalData } = corporateEntity;

                if (originalData) {
                    const { logo } = originalData;

                    if (logo.storagePath) {
                        return dispatch(deleteFile(logo.storagePath));
                    }
                }

                return promise();
            };

            asyncRequests.push(updateInCourseAssignations);
            asyncRequests.push(updateInRegionalEntities);
            asyncRequests.push(updateInLearningCommunities);
            asyncRequests.push(updateInFacilitators);
            asyncRequests.push(updateInGroupsParticipants);
            asyncRequests.push(updateInFacilitatorsGroups);
            asyncRequests.push(updateInLearningCommunityGroups);
            asyncRequests.push(deleteCorporateEntityFiles());

            return Promise.all(asyncRequests).then(() => {
                return promise();
            });
        }

        return promise();
    };
};

export default afterDeleteCorporateEntity;
