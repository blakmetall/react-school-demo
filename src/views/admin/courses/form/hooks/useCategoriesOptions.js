import { useMemo } from 'react';
import { categoriesSort } from '../../../../../helpers/sort';

export default function useCategoriesOptions(categories) {
    return useMemo(() => {
        if (categories && categories.length) {
            const categoriesArray = Object.keys(categories).map(key => categories[key]);

            return categoriesArray.sort(categoriesSort).map(category => ({
                label: category.name,
                value: category.id,
            }));
        }

        return [];
    }, [categories]);
}
