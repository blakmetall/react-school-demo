import { useMemo } from 'react';
import { groupsSort } from '../../../../helpers/sort';

export default function useLearningCommunityGroupsOptions(learningCommunityId, learningCommunityGroups, groups) {
    return useMemo(() => {
        if (learningCommunityGroups && learningCommunityGroups.length) {
            const learningCommunityGroupsArray = Object.keys(learningCommunityGroups)
                .map(key => learningCommunityGroups[key])
                .filter(item => learningCommunityId && learningCommunityId === item.learningCommunityId);

            if (learningCommunityGroupsArray && learningCommunityGroupsArray.length) {
                const groupsIds = (learningCommunityGroupsArray[0] && learningCommunityGroupsArray[0].groupsIds) || [];
                const groupsOptions = groups.filter(g => groupsIds.indexOf(g.id) !== -1);

                return groupsOptions.sort(groupsSort).map(group => ({
                    label: group.name,
                    value: group.id,
                }));
            }
        }

        return [];
    }, [learningCommunityId, learningCommunityGroups, groups]);
}
