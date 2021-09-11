import { promise, runXMLHttpRequest } from '../../../helpers';
import { getCollectionWhere } from '../firebase';
import { setInvitationToken } from '../invitations';

const sendLearningCommunityManagersInvitations = (item, managers, prevManagers) => {
    const filterUpdatedOnly = (managersItems, prevManagersItems) => {
        if (managersItems.length && prevManagersItems.length) {
            return managers.filter(manager => {
                const found = prevManagersItems.filter(pm => pm.email === manager.email);

                if (found.length) {
                    return false;
                }

                return true;
            });
        }

        return managers;
    };

    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        if (managers && managers.length) {
            const managersList = filterUpdatedOnly(managers, prevManagers);

            const managersInvitationRequests = managersList.map(manager => {
                const { email } = manager;

                const hasProfileRequest = dispatch(getCollectionWhere('profiles', [['email', '==', email]]));

                return hasProfileRequest.then(profiles => {
                    if (profiles.length) {
                        return promise({ ...manager, found: true });
                    }

                    return promise({ ...manager, found: false });
                });
            });

            return Promise.all(managersInvitationRequests).then(managersResults => {
                return managersResults.map(manager => {
                    if (manager.found) {
                        const baseUrl = process.env.REACT_APP_FIREBASE_FUNCTIONS_URL;
                        const requestUrl = `${baseUrl}/email-sendInvitation`;

                        const params = {
                            email: manager.email,
                            section: 'learning-community',
                            sectionName: item.name,
                        };

                        const request = runXMLHttpRequest(requestUrl, params);

                        return request.then(() => {
                            return promise();
                        });
                    }

                    const afterCreateInvitation = dispatch(setInvitationToken(manager.email));

                    return afterCreateInvitation.then(invitation => {
                        const baseUrl = process.env.REACT_APP_FIREBASE_FUNCTIONS_URL;
                        const requestUrl = `${baseUrl}/email-sendInvitation`;

                        const params = {
                            token: invitation.token,
                            email: manager.email,
                            section: 'learning-community',
                            sectionName: item.name,
                        };

                        const request = runXMLHttpRequest(requestUrl, params);

                        return request.then(() => {
                            return promise();
                        });
                    });
                });
            });
        }

        return promise();
    };
};

export default sendLearningCommunityManagersInvitations;
