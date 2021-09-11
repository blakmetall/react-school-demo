import { authTypes } from '../../types';

const setCorporateEntitySession = corporateEntity => ({
    type: authTypes.SET_CORPORATE_ENTITY_DATA,
    payload: corporateEntity,
});

export default setCorporateEntitySession;
