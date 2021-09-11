import { uiTypes } from '../../types';

const setMenuOpenStatus = status => ({
    type: uiTypes.SET_MENU_OPEN_STATUS,
    payload: status,
});

export default setMenuOpenStatus;
