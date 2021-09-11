import { useMemo } from 'react';
import { managersSort } from '../../../../helpers/sort';

export default function useFacilitatorsOptions(learningCommunityId, facilitators, managers) {
    return useMemo(() => {
        if (facilitators && facilitators.length) {
            const facilitatorsArray = Object.keys(facilitators)
                .map(key => facilitators[key])
                .filter(item => learningCommunityId && learningCommunityId === item.learningCommunityId);

            if (facilitatorsArray && facilitatorsArray.length) {
                const managersIds = (facilitatorsArray[0] && facilitatorsArray[0].managersIds) || [];
                const managersOptions = managers.filter(m => managersIds.indexOf(m.id) !== -1);

                return managersOptions.sort(managersSort).map(manager => ({
                    label: `${manager.name} - ${manager.email}`,
                    value: manager.id,
                    name: manager.name,
                }));
            }
        }

        return [];
    }, [learningCommunityId, facilitators, managers]);
}
