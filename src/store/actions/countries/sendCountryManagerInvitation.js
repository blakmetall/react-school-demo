import { promise, runXMLHttpRequest } from '../../../helpers';
import { setInvitationToken } from '../invitations';

const sendCountryManagerInvitation = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const afterCreateInvitation = dispatch(setInvitationToken(item.managerEmail));

        return afterCreateInvitation.then(invitation => {
            const baseUrl = process.env.REACT_APP_FIREBASE_FUNCTIONS_URL;
            const requestUrl = `${baseUrl}/email-sendInvitation`;

            const params = {
                token: invitation.token,
                email: item.managerEmail,
                section: 'country',
                sectionName: item.name,
            };

            const request = runXMLHttpRequest(requestUrl, params);

            return request.then(() => {
                return promise();
            });
        });
    };
};

export default sendCountryManagerInvitation;
