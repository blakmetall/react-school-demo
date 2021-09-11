import randomstring from 'randomstring';
import { getCollectionWhere } from '../firebase';

const { promise } = require('../../../helpers');

const setInvitationToken = email => {
    return (dispatch, getState, getFirebase) => {
        const hasInvitationRequest = dispatch(getCollectionWhere('invitations', [['email', '==', email]]));

        return hasInvitationRequest.then(invitations => {
            if (invitations.length) {
                const invitation = invitations[0];
                return promise(invitation);
            }

            const invitation = {
                email,
                token: randomstring.generate({
                    length: 33,
                }),
            };

            return getFirebase()
                .firestore()
                .collection('invitations')
                .add(invitation)
                .then(doc => {
                    return promise({
                        ...invitation,
                        id: doc.id,
                    });
                });
        });
    };
};

export default setInvitationToken;
