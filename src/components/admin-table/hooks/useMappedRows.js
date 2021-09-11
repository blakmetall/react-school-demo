import { useMemo } from 'react';
import { objectKeysToArray } from '../../../helpers';

export default function useMappedRows(items, requestSettings, rowLevel) {
    return useMemo(() => {
        if (items) {
            const { mapFields, rowActions, settings } = requestSettings[rowLevel];
            const { sortPipe } = settings;

            const sortedItems = objectKeysToArray(items).sort(sortPipe);

            return sortedItems.map(item => {
                const mappedItem = {
                    originalData: item,
                };

                Object.keys(mapFields).forEach(key => {
                    const foundProp = (item && item[key]) || undefined;

                    if (foundProp) {
                        const mappedProp = mapFields[key];
                        mappedItem[mappedProp] = foundProp;
                    }

                    mappedItem.rowActions = rowActions;
                    mappedItem.settings = settings;
                });

                return mappedItem;
            });
        }

        return [];

        // eslint-disable-next-line
    }, [items, requestSettings, rowLevel]);
}
