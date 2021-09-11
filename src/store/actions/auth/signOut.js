import { promise } from '../../../helpers';
import { clearAuth } from '.';
import { clearUI } from '../ui';

const signOut = () => {
    return (dispatch, getState, getFirebase) =>
        getFirebase()
            .auth()
            .signOut()
            .then(() => {
                dispatch(clearAuth());
                dispatch(clearUI());

                return promise();
            });
};

export default signOut;
