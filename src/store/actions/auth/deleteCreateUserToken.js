import { deleteInvitation, getInvitations } from '../invitations';

const deleteCreateUserToken = ({ email, token }) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => 
        dispatch(
            getInvitations({
                where: [
                    ['email', '==', email],
                    ['token', '==', token],
                ],
            }),
        ).then(invitations => Promise.all(() => invitations.map(({ id: docId }) => dispatch(deleteInvitation({ docId })))));
};

export default deleteCreateUserToken;
