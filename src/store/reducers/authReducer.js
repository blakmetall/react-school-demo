import { authTypes } from '../types';

const initialState = {
    menu: undefined,
    profile: undefined,
    role: undefined,

    country: undefined,
    corporateEntity: undefined,
    regionalEntity: undefined,
    learningCommunity: undefined,
    group: undefined,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authTypes.SET_MENU:
            return {
                ...state,
                menu: action.payload,
            };
        case authTypes.SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.payload,
            };
        case authTypes.SET_ROLE_DATA:
            return {
                ...state,
                role: action.payload,
            };
        case authTypes.SET_COUNTRY_DATA:
            return {
                ...state,
                country: action.payload,
            };
        case authTypes.SET_CORPORATE_ENTITY_DATA:
            return {
                ...state,
                corporateEntity: action.payload,
            };
        case authTypes.SET_REGIONAL_ENTITY_DATA:
            return {
                ...state,
                regionalEntity: action.payload,
            };
        case authTypes.SET_LEARNING_COMMUNITY_DATA:
            return {
                ...state,
                learningCommunity: action.payload,
            };
        case authTypes.SET_GROUP_DATA:
            return {
                ...state,
                group: action.payload,
            };
        case authTypes.CLEAR_AUTH:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
}
