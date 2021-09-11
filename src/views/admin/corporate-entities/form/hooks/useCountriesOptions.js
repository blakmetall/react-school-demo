import { useMemo } from 'react';
import { countriesSort } from '../../../../../helpers/sort';

export default function useCountriesOptions(countries) {
    return useMemo(() => {
        if (countries && countries.length) {
            const countriesArray = Object.keys(countries).map(key => countries[key]);

            return countriesArray.sort(countriesSort).map(country => ({
                label: country.name,
                value: country.id,
            }));
        }

        return [];
    }, [countries]);
}
