import { promise } from '../../../helpers';
import { authTypes } from '../../types';
import { getProfile } from '../profiles';

const loadUserProfile = ({ authId }) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => 
        dispatch(
            getProfile({
                where: [['authId', '==', authId]],
            }),
        ).then(profile => {
            dispatch({
                type: authTypes.SET_PROFILE_DATA,
                payload: profile,
            });

            return promise();
        });
};

export default loadUserProfile;
