import { useMemo } from 'react';
import { corporateEntitiesSort } from '../../../../helpers/sort';

export default function useCorporateEntitiesOptions(corporateEntities) {
    return useMemo(() => {
        if (corporateEntities && corporateEntities.length) {
            const corporateEntitiesArray = Object.keys(corporateEntities).map(key => corporateEntities[key]);

            return corporateEntitiesArray.sort(corporateEntitiesSort).map(corporateEntity => ({
                label: corporateEntity.name,
                value: corporateEntity.id,
            }));
        }

        return [];
    }, [corporateEntities]);
}
