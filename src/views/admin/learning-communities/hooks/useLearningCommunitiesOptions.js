import { useMemo } from 'react';
import { learningCommunitiesSort } from '../../../../helpers/sort';

export default function useLearningCommunitiesOptions(regionalEntityId, learningCommunities) {
    return useMemo(() => {
        if (learningCommunities && learningCommunities.length) {
            const learningCommunitiesArray = Object.keys(learningCommunities)
                .map(key => learningCommunities[key])
                .filter(item => regionalEntityId && regionalEntityId === item.regionalEntityId);

            return learningCommunitiesArray.sort(learningCommunitiesSort).map(learningCommunity => ({
                label: learningCommunity.name,
                value: learningCommunity.id,
            }));
        }

        return [];
    }, [regionalEntityId, learningCommunities]);
}
