import { awaitRequests, promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';
import { getProfileByEmail } from '../profiles';
import { getCountries, updateCountry } from '../countries';
import { getCorporateEntities, updateCorporateEntity } from '../corporate-entities';
import { getFacilitatorsManagers } from '../facilitators-managers';
import { getManagers } from '../managers';
import { getParticipants } from '../participants';

const updateProfileManagementRelations = profile => {
    return (dispatch, getState, getFirebase) => {
        const { id, email } = profile;

        const runUpdates = profileId => {
            const asyncRequests = [
                // -- update profileId to related country managers
                dispatch(getCountries({ where: [['managerEmail', '==', email]] })).then(countries =>
                    countries.map(({ id: docId }) => updateCountry({ docId, data: { managerProfileId: profileId } })),
                ),

                // -- update profile id to related corporate entity managers
                dispatch(getCorporateEntities({ where: [['managerEmail', '==', email]] })).then(corporateEntities =>
                    corporateEntities.map(
                        ({ id: docId }) => updateCorporateEntity({ docId, data: { managerProfileId: profileId } }),
                        // actualizar archivo de actualización de entidad corporativa
                    ),
                ),
            ];

            // update in managers
            const updateInManagers = getFirebase()
                .firestore()
                .collection('managers')
                .where('email', '==', email)
                .get()
                .then(querySnapshot => {
                    const managers = getItemsFromSnapshot(querySnapshot);

                    const updatesRequests = managers.map(manager => {
                        return getFirebase()
                            .firestore()
                            .collection('managers')
                            .doc(manager.id)
                            .update({
                                profileId,
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            // update in facilitatorsManagers
            const updateInFacilitatorsManagers = getFirebase()
                .firestore()
                .collection('facilitatorsManagers')
                .where('email', '==', email)
                .get()
                .then(querySnapshot => {
                    const facilitators = getItemsFromSnapshot(querySnapshot);

                    const updatesRequests = facilitators.map(facilitator => {
                        return getFirebase()
                            .firestore()
                            .collection('facilitatorsManagers')
                            .doc(facilitator.id)
                            .update({
                                profileId,
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            // update in participants
            const updateInParticipants = getFirebase()
                .firestore()
                .collection('participants')
                .where('email', '==', email)
                .get()
                .then(querySnapshot => {
                    const participants = getItemsFromSnapshot(querySnapshot);

                    const updatesRequests = participants.map(participant => {
                        return getFirebase()
                            .firestore()
                            .collection('participants')
                            .doc(participant.id)
                            .update({
                                profileId,
                            });
                    });

                    return Promise.all(updatesRequests).then(() => {
                        return promise();
                    });
                });

            asyncRequests.push(updateInManagers);
            asyncRequests.push(updateInFacilitatorsManagers);
            asyncRequests.push(updateInParticipants);

            return Promise.all(asyncRequests).then(() => {
                return promise();
            });
        };

        if (id) {
            return runUpdates(id);
        }

        const profileRequest = dispatch(getProfileByEmail(email));

        return profileRequest.then(profileFound => {
            if (profileFound) {
                return runUpdates(profileFound.id);
            }

            return promise();
        });
    };
};

export default updateProfileManagementRelations;
