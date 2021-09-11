import { authTypes } from '../../types';

const clearAuth = () => ({
    type: authTypes.CLEAR_AUTH,
});

export default clearAuth;
