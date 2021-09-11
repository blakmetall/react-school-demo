import { authTypes } from '../../types';

const setMenuSession = menu => ({
    type: authTypes.SET_MENU,
    payload: menu,
});

export default setMenuSession;
