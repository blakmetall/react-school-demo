import { useMemo } from 'react';
import { regionalEntitiesSort } from '../../../../helpers/sort';

export default function useRegionalEntitiesOptions(corporateEntityId, regionalEntities) {
    return useMemo(() => {
        if (regionalEntities && regionalEntities.length) {
            const regionalEntitiesArray = Object.keys(regionalEntities)
                .map(key => regionalEntities[key])
                .filter(item => corporateEntityId && corporateEntityId === item.corporateEntityId);

            return regionalEntitiesArray.sort(regionalEntitiesSort).map(regionalEntity => ({
                label: regionalEntity.name,
                value: regionalEntity.id,
            }));
        }

        return [];
    }, [corporateEntityId, regionalEntities]);
}
