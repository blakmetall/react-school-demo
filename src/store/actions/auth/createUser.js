import { awaitRequests, promise } from '../../../helpers';
import { addProfile, getProfile, updateProfile } from '../profiles';
import { loadUserProfile } from '../session';
import { deleteCreateUserToken, signIn } from './index';
import { updateProfileManagementRelations } from '../general';

const createUser = (email, password, token) => {
    return (dispatch, getState, getFirebase) =>
        getFirebase()
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(snapshot => {
                const authId = snapshot.user.uid;

                const profileData = {
                    email,
                    authId,
                    emailVerified: snapshot.user.emailVerified,
                };

                // save the profile information for the creating user
                const profileSaved = dispatch(getProfile({ where: [['email', '==', email]] })).then(profile => {
                    if (profile) {
                        return dispatch(updateProfile({ docId: profile.id, data: profileData }));
                    }

                    return dispatch(addProfile({ data: profileData }));
                });

                return profileSaved.then(profile => {
                    if (profile) {
                        return dispatch(updateProfileManagementRelations(profile)).then(() =>
                            awaitRequests([
                                dispatch(deleteCreateUserToken({ email, token })),
                                dispatch(signIn({ email, password })),
                                dispatch(loadUserProfile({ authId })),
                            ]),
                        );
                    }

                    return promise();
                });
            });
};

export default createUser;
