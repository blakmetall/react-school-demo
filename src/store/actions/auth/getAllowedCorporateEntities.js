import { awaitRequests, promise, removeArrayDuplicates } from '../../../helpers';
import { findManagementIdsByProfileId } from './index';
import { getCorporateEntity, getCorporateEntities } from '../corporate-entities';
import { getFacilitators } from '../facilitators';
import { getGroupsParticipantsItems } from '../groups-participants';
import { getRegionalEntities } from '../regional-entities';
import { getLearningCommunities } from '../learning-communities';

const getAllowedCorporateEntities = profileId => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const findManagementCorporateEntitiesIds = managementIds => {
            if (managementIds) {
                const { managerId, facilitatorsManagersIds, participantsIds } = managementIds;

                const asyncRequests = [];

                if (managerId) {
                    // -- get related corporate entities ids from regional entities
                    asyncRequests.push(
                        dispatch(getRegionalEntities({ where: [['managersIds', 'array-contains', managerId]] })).then(entities =>
                            promise(entities.map(item => item.corporateEntityId)),
                        ),
                    );

                    // -- get related corporate entities ids from learning communities
                    asyncRequests.push(
                        dispatch(
                            getLearningCommunities({ where: [['managersIds', 'array-contains', managerId]] }),
                        ).then(communities => promise(communities.map(item => item.corporateEntityId))),
                    );
                }

                if (facilitatorsManagersIds && facilitatorsManagersIds.length) {
                    // -- get related corporate entities ids from facilitatorsManagers
                    asyncRequests.push(
                        awaitRequests(
                            facilitatorsManagersIds.map(facilitatorManagerId =>
                                dispatch(
                                    getFacilitators({ where: [['managersIds', 'array-contains', facilitatorManagerId]] }),
                                ).then(facilitators => promise(facilitators.map(item => item.corporateEntityId))),
                            ),
                        ).then(corporateEntitiesIdsList => {
                            const foundIds = [];

                            corporateEntitiesIdsList.forEach(corporateEntitiesIds => {
                                if (corporateEntitiesIds.length) {
                                    corporateEntitiesIds.forEach(id => {
                                        foundIds.push(id);
                                    });
                                }
                            });

                            return promise(foundIds);
                        }),
                    );
                }

                if (participantsIds && participantsIds.length) {
                    // -- get related corporate entities ids from facilitatorsManagers
                    asyncRequests.push(
                        awaitRequests(
                            participantsIds.map(participantId =>
                                dispatch(
                                    getGroupsParticipantsItems({ where: [['participantsIds', 'array-contains', participantId]] }),
                                ).then(groupsParticipantsItems =>
                                    promise(groupsParticipantsItems.map(item => item.corporateEntityId)),
                                ),
                            ),
                        ).then(corporateEntitiesIdsList => {
                            const foundIds = [];

                            corporateEntitiesIdsList.forEach(corporateEntitiesIds => {
                                if (corporateEntitiesIds.length) {
                                    corporateEntitiesIds.forEach(id => {
                                        foundIds.push(id);
                                    });
                                }
                            });

                            return promise(foundIds);
                        }),
                    );
                }

                return awaitRequests(asyncRequests).then(corporateEntitiesIdsList => {
                    const foundIds = [];

                    corporateEntitiesIdsList.forEach(corporateEntitiesIds => {
                        if (corporateEntitiesIds.length) {
                            corporateEntitiesIds.forEach(id => {
                                foundIds.push(id);
                            });
                        }
                    });

                    return promise(foundIds);
                });
            }

            return promise([]);
        };

        // retrieve management ids from collections relations to test corporate entity belonging
        return dispatch(findManagementIdsByProfileId(profileId)).then(managementIds =>
            awaitRequests([
                // -- find corporate entities relations via role assigment
                findManagementCorporateEntitiesIds(managementIds),
                // -- find corporate entities managed
                dispatch(getCorporateEntities({ where: [['managerProfileId', '==', profileId]] })).then(corporateEntities =>
                    promise(corporateEntities.map(item => item.id)),
                ),
            ]).then(corporateEntitiesIdsList => {
                const foundIds = [];

                corporateEntitiesIdsList.forEach(corporateEntitiesIds => {
                    if (corporateEntitiesIds.length) {
                        corporateEntitiesIds.forEach(id => {
                            foundIds.push(id);
                        });
                    }
                });

                // if found corporate entities ids
                if (foundIds.length) {
                    return awaitRequests(removeArrayDuplicates(foundIds).map(docId => dispatch(getCorporateEntity({ docId }))));
                }

                return promise(undefined);
            }),
        );
    };
};

export default getAllowedCorporateEntities;
