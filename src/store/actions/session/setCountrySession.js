import { authTypes } from '../../types';

const setCountrySession = country => ({
    type: authTypes.SET_COUNTRY_DATA,
    payload: country,
});

export default setCountrySession;
