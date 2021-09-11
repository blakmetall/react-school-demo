import { promise, runXMLHttpRequest } from '../../../helpers';
import { getCollectionWhere } from '../firebase';
import { setInvitationToken } from '../invitations';

const sendGroupsParticipantsInvitations = (item, participants, prevParticipants) => {
    const filterUpdatedOnly = (participantsItems, prevParticipantsItems) => {
        if (participantsItems.length && prevParticipantsItems.length) {
            return participants.filter(participant => {
                const found = prevParticipantsItems.filter(pm => pm.email === participant.email);

                if (found.length) {
                    return false;
                }

                return true;
            });
        }

        return participants;
    };

    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        if (participants && participants.length) {
            const participantsList = filterUpdatedOnly(participants, prevParticipants);

            const participantsInvitationRequests = participantsList.map(participant => {
                const { email } = participant;

                const hasProfileRequest = dispatch(getCollectionWhere('profiles', [['email', '==', email]]));

                return hasProfileRequest.then(profiles => {
                    if (profiles.length) {
                        return promise({ ...participant, found: true });
                    }

                    return promise({ ...participant, found: false });
                });
            });

            return Promise.all(participantsInvitationRequests).then(participantsResults => {
                return participantsResults.map(participant => {
                    if (participant.found) {
                        const baseUrl = process.env.REACT_APP_FIREBASE_FUNCTIONS_URL;
                        const requestUrl = `${baseUrl}/email-sendInvitation`;

                        const params = {
                            email: participant.email,
                            section: 'participant',
                            sectionName: item.groupName,
                            sectionName2: item.learningCommunityName,
                        };

                        const request = runXMLHttpRequest(requestUrl, params);

                        return request.then(() => {
                            return promise();
                        });
                    }

                    const afterCreateInvitation = dispatch(setInvitationToken(participant.email));

                    return afterCreateInvitation.then(invitation => {
                        const baseUrl = process.env.REACT_APP_FIREBASE_FUNCTIONS_URL;
                        const requestUrl = `${baseUrl}/email-sendInvitation`;

                        const params = {
                            token: invitation.token,
                            email: participant.email,
                            section: 'participant',
                            sectionName: item.groupName,
                            sectionName2: item.learningCommunityName,
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

export default sendGroupsParticipantsInvitations;
