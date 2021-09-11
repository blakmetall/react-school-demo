import { promise } from '../../../helpers';
import { getItemsFromSnapshot, getItemsFoundFromSnapshot } from '../../../helpers/firebase';
import { findManagementIdsByProfileId } from './index';

const getCorporateEntityAllowedRoles = (corporateEntityId, profileId) => {
    return (dispatch, getState, getFirebase) => {
        const hasRegionalEntityRoleEnabled = managementIds => {
            const { managerId } = managementIds;

            if (managerId) {
                return getFirebase()
                    .firestore()
                    .collection('regionalEntities')
                    .where('corporateEntityId', '==', corporateEntityId)
                    .where('managersIds', 'array-contains', managerId)
                    .get()
                    .then(snapshot => {
                        const regionalEntitiesFound = getItemsFoundFromSnapshot(snapshot);
                        const hasRole = !!regionalEntitiesFound;
                        return promise(hasRole);
                    });
            }

            return promise(false);
        };

        const hasLearningCommunityRoleEnabled = managementIds => {
            const { managerId } = managementIds;

            if (managerId) {
                return getFirebase()
                    .firestore()
                    .collection('learningCommunities')
                    .where('corporateEntityId', '==', corporateEntityId)
                    .where('managersIds', 'array-contains', managerId)
                    .get()
                    .then(snapshot => {
                        const learningCommunitiesFound = getItemsFoundFromSnapshot(snapshot);
                        const hasRole = !!learningCommunitiesFound;
                        return promise(hasRole);
                    });
            }

            return promise(false);
        };

        const hasFacilitatorRoleEnabled = managementIds => {
            const { facilitatorsManagersIds } = managementIds;

            if (facilitatorsManagersIds && facilitatorsManagersIds.length) {
                const facilitatorsManagersRequests = facilitatorsManagersIds.map(facilitatorManagerId => {
                    const request = getFirebase()
                        .firestore()
                        .collection('facilitators')
                        .where('corporateEntityId', '==', corporateEntityId)
                        .where('managersIds', 'array-contains', facilitatorManagerId)
                        .get()
                        .then(snapshot => {
                            const facilitators = getItemsFoundFromSnapshot(snapshot);
                            const hasRole = !!facilitators;
                            return promise(hasRole);
                        });

                    return request;
                });

                return Promise.all(facilitatorsManagersRequests).then(roleVerifications => {
                    const found = roleVerifications.filter(hasRole => hasRole);

                    if (found.length) {
                        return promise(true);
                    }

                    return promise(false);
                });
            }

            return promise(false);
        };

        const hasParticipantRoleEnabled = managementIds => {
            const { participantsIds } = managementIds;

            if (participantsIds && participantsIds.length) {
                const participantsRequests = participantsIds.map(participantId => {
                    const request = getFirebase()
                        .firestore()
                        .collection('groupsParticipants')
                        .where('corporateEntityId', '==', corporateEntityId)
                        .where('participantsIds', 'array-contains', participantId)
                        .get()
                        .then(snapshot => {
                            const participants = getItemsFoundFromSnapshot(snapshot);
                            const hasRole = !!participants;
                            return promise(hasRole);
                        });

                    return request;
                });

                return Promise.all(participantsRequests).then(roleVerifications => {
                    const found = roleVerifications.filter(hasRole => hasRole);

                    if (found.length) {
                        return promise(true);
                    }

                    return promise(false);
                });
            }

            return promise(false);
        };

        // retrieve management ids from collections relations to test corporate entity belonging
        const managementIdsRequest = dispatch(findManagementIdsByProfileId(profileId));

        return managementIdsRequest.then(managementIds => {
            const requests = [];

            // corporate entities query
            requests.push(
                getFirebase()
                    .firestore()
                    .collection('corporateEntities')
                    .where('managerProfileId', '==', profileId)
                    .get(),
            );

            // check if has regional entity role available
            requests.push(hasRegionalEntityRoleEnabled(managementIds));

            // check if has learning community role available
            requests.push(hasLearningCommunityRoleEnabled(managementIds));

            // check if has facilitator role available
            requests.push(hasFacilitatorRoleEnabled(managementIds));

            // check if has participant role available
            requests.push(hasParticipantRoleEnabled(managementIds));

            return Promise.all(requests).then(values => {
                const allowedRoles = [];

                // corporate entity
                const corporateEntitiesSnapshot = values[0];
                if (corporateEntitiesSnapshot) {
                    const corporateEntities = getItemsFromSnapshot(corporateEntitiesSnapshot);
                    if (corporateEntities.length) {
                        allowedRoles.push('corporate-entity');
                    }
                }

                // regional entity
                const hasRegionalEntityRole = values[1];
                if (hasRegionalEntityRole) {
                    allowedRoles.push('regional-entity');
                }

                // learning community
                const hasLearningCommunityRole = values[2];
                if (hasLearningCommunityRole) {
                    allowedRoles.push('learning-community');
                }

                // facilitator
                const hasFacilitatorRole = values[3];
                if (hasFacilitatorRole) {
                    allowedRoles.push('facilitator');
                }

                // participant
                const hasParticipantRole = values[4];
                if (hasParticipantRole) {
                    allowedRoles.push('participant');
                }

                return promise(allowedRoles);
            });
        });
    };
};

export default getCorporateEntityAllowedRoles;
