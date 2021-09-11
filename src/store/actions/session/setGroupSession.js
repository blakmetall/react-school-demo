import { authTypes } from '../../types';

const setGroupSession = group => ({
    type: authTypes.SET_GROUP_DATA,
    payload: group,
});

export default setGroupSession;
