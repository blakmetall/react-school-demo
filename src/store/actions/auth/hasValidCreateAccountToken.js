import { promise } from '../../../helpers';
import { getInvitation } from '../invitations';

const hasValidCreateAccountToken = ({ email, token }) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        return dispatch(
            getInvitation({
                where: [
                    ['email', '==', email],
                    ['token', '==', token],
                ],
            }),
        ).then(invitation => promise(!!invitation));
    };
};

export default hasValidCreateAccountToken;
