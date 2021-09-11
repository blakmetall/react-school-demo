import { promise } from '../../../helpers';
import { getProfiles } from '../profiles';

const emailHasProfile = email => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => 
        dispatch(
            getProfiles({
                where: [['email', '==', email]],
            }),
        ).then(profiles => promise(!!profiles.length));
};

export default emailHasProfile;
