import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';
import updateLearningCommunityGroupRelations from './updateLearningCommunityGroupRelations';

const updateLearningCommunityGroupList = (docId, groups, prevGroups) => {
    return (dispatch, getState, getFirebase) => {
        const cleanDataFromRemovedGroups = savedGroupsId => {
            if (prevGroups && prevGroups.length) {
                const groupsToClean = prevGroups.filter(group => group.id && savedGroupsId.indexOf(group.id) === -1);

                const updatePromises = [];

                const updateInGroupsParticipants = groupsToClean.map(group => {
                    return getFirebase()
                        .firestore()
                        .collection('groupsParticipants')
                        .where('groupId', '==', group.id)
                        .get()
                        .then(querySnapshot => {
                            const groupsParticipants = getItemsFromSnapshot(querySnapshot);

                            const groupsParticipantsUpdate = groupsParticipants.map(item => {
                                return getFirebase()
                                    .firestore()
                                    .collection('groupsParticipants')
                                    .doc(item.id)
                                    .update({
                                        groupId: '',
                                        groupName: '--',
                                    });
                            });

                            return Promise.all(groupsParticipantsUpdate).then(() => {
                                return promise();
                            });
                        });
                });

                const updateInFacilitatorsGroups = groupsToClean.map(group => {
                    return getFirebase()
                        .firestore()
                        .collection('facilitatorsGroups')
                        .where('groupId', '==', group.id)
                        .get()
                        .then(querySnapshot => {
                            const facilitatorsGroups = getItemsFromSnapshot(querySnapshot);

                            const facilitatorsGroupsUpdate = facilitatorsGroups.map(item => {
                                return getFirebase()
                                    .firestore()
                                    .collection('facilitatorsGroups')
                                    .doc(item.id)
                                    .update({
                                        groupId: '',
                                        groupName: '--',
                                    });
                            });

                            return Promise.all(facilitatorsGroupsUpdate).then(() => {
                                return promise();
                            });
                        });
                });

                updatePromises.push(updateInGroupsParticipants);
                updatePromises.push(updateInFacilitatorsGroups);

                return Promise.all(updatePromises).then(() => {
                    return promise();
                });
            }

            return promise();
        };

        if (docId) {
            const asyncRequests = groups.map(group => {
                const { id, name } = group;

                if (id) {
                    return getFirebase()
                        .firestore()
                        .collection('groups')
                        .doc(id)
                        .get()
                        .then(searchSnapshot => {
                            const groupFound = !searchSnapshot.empty;

                            if (groupFound) {
                                return getFirebase()
                                    .firestore()
                                    .collection('groups')
                                    .doc(id)
                                    .update({
                                        name,
                                    })
                                    .then(() => {
                                        return dispatch(updateLearningCommunityGroupRelations(name, id)).then(() => {
                                            return promise({
                                                learningCommunityGroupId: docId,
                                                id,
                                                name,
                                            });
                                        });
                                    });
                            }

                            return promise();
                        });
                }

                const newGroup = {
                    name,
                    learningCommunityGroupId: docId,
                };

                return getFirebase()
                    .firestore()
                    .collection('groups')
                    .add(newGroup)
                    .then(docRef => {
                        return promise({
                            ...newGroup,
                            id: docRef.id,
                        });
                    });
            });

            return Promise.all(asyncRequests).then(responses => {
                const groupsIds = responses.filter(group => group.id).map(group => group.id);
                const groupsAdded = responses.filter(group => group.id);

                const afterCleanDataFromRemovedGroups = cleanDataFromRemovedGroups(groupsIds);

                return afterCleanDataFromRemovedGroups.then(() => {
                    return getFirebase()
                        .firestore()
                        .collection('learningCommunityGroups')
                        .doc(docId)
                        .update({ groupsIds })
                        .then(() => {
                            return promise({ groupsIds, groupsAdded });
                        });
                });
            });
        }

        const afterCleanDataFromRemovedGroups = cleanDataFromRemovedGroups([]);

        return afterCleanDataFromRemovedGroups.then(() => {
            return getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .doc(docId)
                .update({ groupsIds: [] })
                .then(() => {
                    return promise({ groupsIds: [], groupsAdded: [] });
                });
        });
    };
};

export default updateLearningCommunityGroupList;
