import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveCountry = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { name, id: countryId } = item;

        const countriesRequest = dispatch(getCollectionWhere('countries', [['name', '==', name]]));

        return countriesRequest.then(countries => {
            if (countries.length) {
                const found = countries.filter(country => {
                    if (country.id === countryId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({ success: false, errorMsg: 'El nombre del país ya está siendo utilizado' });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveCountry;
