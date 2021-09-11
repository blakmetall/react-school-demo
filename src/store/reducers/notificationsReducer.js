import { notificationsTypes } from '../types';

const initialState = {
    showSuccess: false,
    showFailed: false,
    failedMsg: '',

    showBatchResults: false,
    batchResuls: {},
};

export default function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case notificationsTypes.SHOW_SUCCESS_NOTIFICATION:
            return {
                ...state,
                showSuccess: action.payload,
            };
        case notificationsTypes.SHOW_FAILED_NOTIFICATION:
            return {
                ...state,
                showFailed: action.payload.status,
                failedMsg: action.payload.errorMsg,
            };
        case notificationsTypes.SHOW_BATCH_RESULTS_NOTIFICATION:
            return {
                ...state,
                showBatchResults: action.payload.showBatchResults,
                batchResults: action.payload.batchResults,
            };
        default:
            return state;
    }
}
