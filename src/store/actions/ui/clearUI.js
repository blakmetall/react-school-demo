import { uiTypes } from '../../types';

const clearUI = status => ({
    type: uiTypes.CLEAR_DATA,
    payload: status,
});

export default clearUI;
