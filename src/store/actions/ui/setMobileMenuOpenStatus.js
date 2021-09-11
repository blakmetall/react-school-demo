import { uiTypes } from '../../types';

const setMobileMenuOpenStatus = status => ({
    type: uiTypes.SET_MOBILE_MENU_OPEN_STATUS,
    payload: status,
});

export default setMobileMenuOpenStatus;
