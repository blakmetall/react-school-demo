import { promise } from '../../../helpers';
import { getCountries } from '../countries';

const hasCountryRole = profileId => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => 
        dispatch(
            getCountries({
                where: [['managerProfileId', '==', profileId]],
            }),
        ).then(countries => promise(!!countries.length));
};

export default hasCountryRole;
