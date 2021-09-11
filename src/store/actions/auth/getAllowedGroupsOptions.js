import { awaitRequests, promise } from '../../../helpers';
import { facilitatorsGroupsSort } from '../../../helpers/sort';
import { getFacilitators } from '../facilitators';
import { getFacilitatorsGroupsItems } from '../facilitators-groups';
import { getGroupsParticipantsItems } from '../groups-participants';

const getAllowedGroupsOptions = (corporateEntity, learningCommunity, role, managementIds) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        // --
        const { facilitatorsManagersIds, participantsIds } = managementIds;
        const { id: corporateEntityId } = corporateEntity;
        const { id: learningCommunityId } = learningCommunity;
        const { slug } = role;

        // retrieve facilitator available groups
        if (slug === 'facilitator' && facilitatorsManagersIds && facilitatorsManagersIds.length) {
            // --
            return awaitRequests(
                facilitatorsManagersIds.map(facilitatorManagerId =>
                    dispatch(
                        getFacilitators({
                            where: [
                                ['corporateEntityId', '==', corporateEntityId],
                                ['learningCommunityId', '==', learningCommunityId],
                                ['managersIds', 'array-contains', facilitatorManagerId],
                            ],
                        }),
                    ).then(facilitators => promise((facilitators.length && facilitatorManagerId) || '')),
                ),
            ).then(foundIds => {
                if (foundIds && foundIds.length) {
                    const facilitatorsIds = foundIds.filter(id => !!id);

                    return awaitRequests(
                        facilitatorsIds.map(facilitatorId =>
                            dispatch(getFacilitatorsGroupsItems({ where: [['facilitatorId', '==', facilitatorId]] })),
                        ),
                    ).then(facilitatorsGroupsItemsList => {
                        const facilitatorsGroups = [];

                        facilitatorsGroupsItemsList.forEach(facilitatorsGroupsItems => {
                            facilitatorsGroupsItems.forEach(item => {
                                facilitatorsGroups.push(item);
                            });
                        });

                        const groups = facilitatorsGroups.sort(facilitatorsGroupsSort).map(item => {
                            return {
                                id: item.groupId,
                                name: item.groupName,
                            };
                        });

                        const facilitatorsGroupsOptions = groups.map(item => {
                            return {
                                label: item.name,
                                value: item.id,
                            };
                        });

                        return promise({ options: facilitatorsGroupsOptions, groups });
                    });
                }

                return promise({ options: [], groups: [] });
            });
        }

        // retrieve participant available groups
        if (slug === 'participant' && participantsIds && participantsIds.length) {
            // --
            return awaitRequests(
                participantsIds.map(participantId =>
                    dispatch(
                        getGroupsParticipantsItems({
                            where: [
                                ['corporateEntityId', '==', corporateEntityId],
                                ['learningCommunityId', '==', learningCommunityId],
                                ['participantsIds', 'array-contains', participantId],
                            ],
                        }),
                    ),
                ),
            ).then(groupsParticipantsItemsList => {
                const groups = [];

                groupsParticipantsItemsList.forEach(groupsParticipantsItems => {
                    groupsParticipantsItems.forEach(item => {
                        groups.push({
                            name: item.groupName,
                            id: item.groupId,
                        });
                    });
                });

                const participantGroupsOptions = groups.map(item => {
                    return {
                        label: item.name,
                        value: item.id,
                    };
                });

                return promise({ options: participantGroupsOptions, groups });
            });
        }

        return promise({ options: [], groups: [] });
    };
};

export default getAllowedGroupsOptions;
