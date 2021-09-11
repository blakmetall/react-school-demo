import { uiTypes } from '../types';

const initialState = {
    isMenuOpen: true,
    isMobileMenuOpen: false,
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case uiTypes.SET_MENU_OPEN_STATUS:
            return {
                ...state,
                isMenuOpen: action.payload,
            };
        case uiTypes.SET_MOBILE_MENU_OPEN_STATUS:
            return {
                ...state,
                isMobileMenuOpen: action.payload,
            };
        case uiTypes.CLEAR_DATA:
            return {
                ...state,
                ...initialState,
            };

        default:
            return state;
    }
}
