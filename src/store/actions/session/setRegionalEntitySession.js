import { authTypes } from '../../types';

const setRegionalEntitySession = regionalEntity => ({
    type: authTypes.SET_REGIONAL_ENTITY_DATA,
    payload: regionalEntity,
});

export default setRegionalEntitySession;
