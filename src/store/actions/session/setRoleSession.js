import { authTypes } from '../../types';

const setRoleSession = role => ({
    type: authTypes.SET_ROLE_DATA,
    payload: role,
});

export default setRoleSession;
