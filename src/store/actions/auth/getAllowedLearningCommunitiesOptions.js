import { promise } from '../../../helpers';
import { getDocFromSnapshot, getItemsFromSnapshot } from '../../../helpers/firebase';
import { learningCommunitiesSort } from '../../../helpers/sort';

const getAllowedLearningCommunitiesOptions = (slug, managementIds, corporateEntity) => {
    return (dispatch, getState, getFirebase) => {
        const { managerId, facilitatorsManagersIds, participantsIds } = managementIds;
        const { id: corporateEntityId } = corporateEntity;

        if (slug === 'learning-community' && managementIds) {
            return getFirebase()
                .firestore()
                .collection('learningCommunities')
                .where('corporateEntityId', '==', corporateEntityId)
                .where('managersIds', 'array-contains', managerId)
                .get()
                .then(snapshot => {
                    const learningCommunities = getItemsFromSnapshot(snapshot);

                    if (learningCommunities.length) {
                        const learningCommunitiesOptions = learningCommunities.sort(learningCommunitiesSort).map(lc => {
                            return {
                                label: lc.name,
                                value: lc.id,
                            };
                        });

                        return promise({ options: learningCommunitiesOptions, learningCommunities });
                    }

                    return promise({ options: [], learningCommunities: [] });
                });
        }

        if (slug === 'facilitator' && facilitatorsManagersIds && facilitatorsManagersIds.length) {
            const facilitatorsItemsRequests = facilitatorsManagersIds.map(facilitatorManagerId => {
                return getFirebase()
                    .firestore()
                    .collection('facilitators')
                    .where('corporateEntityId', '==', corporateEntityId)
                    .where('managersIds', 'array-contains', facilitatorManagerId)
                    .get()
                    .then(snapshot => {
                        const facilitators = getItemsFromSnapshot(snapshot);

                        if (facilitators.length) {
                            const learningCommunitiesIds = facilitators.map(f => f.learningCommunityId);
                            return promise(learningCommunitiesIds);
                        }

                        return promise([]);
                    });
            });

            return Promise.all(facilitatorsItemsRequests).then(foundIds => {
                if (foundIds && foundIds.length) {
                    const learningCommunitiesIds = [];

                    foundIds.forEach(item => {
                        if (item && item.length) {
                            item.forEach(learningCommunityId => {
                                learningCommunitiesIds.push(learningCommunityId);
                            });
                        }
                    });

                    const filteredLearningCommunitiesIds = learningCommunitiesIds.filter(
                        (learningCommunityId, index) => learningCommunitiesIds.indexOf(learningCommunityId) === index,
                    );

                    const learningCommunitiesRequests = filteredLearningCommunitiesIds.map(learningCommunityId => {
                        return getFirebase()
                            .firestore()
                            .collection('learningCommunities')
                            .doc(learningCommunityId)
                            .get()
                            .then(snapshot => {
                                return promise(getDocFromSnapshot(snapshot));
                            });
                    });

                    return Promise.all(learningCommunitiesRequests).then(learningCommunities => {
                        const learningCommunitiesOptions = learningCommunities.sort(learningCommunitiesSort).map(lc => {
                            return {
                                label: lc.name,
                                value: lc.id,
                            };
                        });

                        return promise({ options: learningCommunitiesOptions, learningCommunities });
                    });
                }

                return promise({ options: [], learningCommunities: [] });
            });
        }

        if (slug === 'participant' && participantsIds && participantsIds.length) {
            const participantsItemsRequests = participantsIds.map(participantId => {
                return getFirebase()
                    .firestore()
                    .collection('groupsParticipants')
                    .where('corporateEntityId', '==', corporateEntityId)
                    .where('participantsIds', 'array-contains', participantId)
                    .get()
                    .then(snapshot => {
                        const groupsParticipants = getItemsFromSnapshot(snapshot);

                        if (groupsParticipants.length) {
                            const learningCommunitiesIds = groupsParticipants.map(gp => gp.learningCommunityId);
                            return promise(learningCommunitiesIds);
                        }

                        return promise([]);
                    });
            });

            return Promise.all(participantsItemsRequests).then(gpResponses => {
                if (gpResponses && gpResponses.length) {
                    const learningCommunitiesIds = [];

                    gpResponses.forEach(gpResponse => {
                        if (gpResponse && gpResponse.length) {
                            gpResponse.forEach(learningCommunityId => {
                                learningCommunitiesIds.push(learningCommunityId);
                            });
                        }
                    });

                    const filteredLearningCommunitiesIds = learningCommunitiesIds.filter(
                        (learningCommunityId, index) => learningCommunitiesIds.indexOf(learningCommunityId) === index,
                    );

                    const learningCommunitiesRequests = filteredLearningCommunitiesIds.map(learningCommunityId => {
                        return getFirebase()
                            .firestore()
                            .collection('learningCommunities')
                            .doc(learningCommunityId)
                            .get()
                            .then(snapshot => {
                                return promise(getDocFromSnapshot(snapshot));
                            });
                    });

                    return Promise.all(learningCommunitiesRequests).then(learningCommunities => {
                        const learningCommunitiesOptions = learningCommunities.sort(learningCommunitiesSort).map(lc => {
                            return {
                                label: lc.name,
                                value: lc.id,
                            };
                        });

                        return promise({ options: learningCommunitiesOptions, learningCommunities });
                    });
                }

                return promise({ options: [], learningCommunities: [] });
            });
        }

        return promise({ options: [], learningCommunities: [] });
    };
};

export default getAllowedLearningCommunitiesOptions;
