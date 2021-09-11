import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const updateManagersRelations = (name, email) => {
    return (dispatch, getState, getFirebase) => {
        const managerRelationsRequests = [];

        // update manager data in countries
        const countriesRequest = dispatch(getCollectionWhere('countries', [['managerEmail', '==', email]]));
        const updateManagersInCountries = countriesRequest.then(countries => {
            if (countries.length) {
                const managersUpdateRequests = countries.map(country => {
                    return getFirebase()
                        .firestore()
                        .collection('countries')
                        .doc(country.id)
                        .update({ managerName: name });
                });

                return Promise.all(managersUpdateRequests).then(() => {
                    return promise();
                });
            }

            return promise();
        });

        // update manager data in corporate entities
        const corporateEntitiesRequest = dispatch(getCollectionWhere('corporateEntities', [['managerEmail', '==', email]]));
        const updateManagersInCorporateEntities = corporateEntitiesRequest.then(corporateEntities => {
            if (corporateEntities.length) {
                const managersUpdateRequests = corporateEntities.map(corporateEntity => {
                    return getFirebase()
                        .firestore()
                        .collection('corporateEntities')
                        .doc(corporateEntity.id)
                        .update({ managerName: name });
                });

                return Promise.all(managersUpdateRequests).then(() => {
                    return promise();
                });
            }

            return promise();
        });

        // update manager data in managers
        const managersRequests = dispatch(getCollectionWhere('managers', [['email', '==', email]]));
        const updateManagersInManagersCollection = managersRequests.then(managersResults => {
            if (managersResults.length) {
                // update in managers main table
                const managersUpdateRequests = managersResults.map(manager => {
                    return getFirebase()
                        .firestore()
                        .collection('managers')
                        .doc(manager.id)
                        .update({ name });
                });

                return Promise.all([managersUpdateRequests]).then(() => {
                    return promise();
                });
            }

            return promise();
        });

        // update manager data in facilitators managers
        const facilitatorsManagersRequests = dispatch(getCollectionWhere('facilitatorsManagers', [['email', '==', email]]));
        const updateManagersInFacilitatorsManagersCollection = facilitatorsManagersRequests.then(facilitatorsManagersResults => {
            if (facilitatorsManagersResults.length) {
                // update in managers main table
                const managersUpdateRequests = facilitatorsManagersResults.map(manager => {
                    return getFirebase()
                        .firestore()
                        .collection('facilitatorsManagers')
                        .doc(manager.id)
                        .update({ name });
                });

                // update relations names in facilitator groups using the manager id
                const facilitatorsManagersUpdateRequests = facilitatorsManagersResults.map(facilitatorManager => {
                    const facilitatorsGroupsRequests = dispatch(
                        getCollectionWhere('facilitatorsGroups', [['facilitatorId', '==', facilitatorManager.id]]),
                    );

                    return facilitatorsGroupsRequests.then(facilitatorsGroups => {
                        if (facilitatorsGroups.length) {
                            const updates = facilitatorsGroups.map(facilitatorGroup => {
                                return getFirebase()
                                    .firestore()
                                    .collection('facilitatorsGroups')
                                    .doc(facilitatorGroup.id)
                                    .update({ facilitatorName: name });
                            });

                            return Promise.all(updates).then(() => {
                                return promise();
                            });
                        }

                        return promise();
                    });
                });

                return Promise.all([managersUpdateRequests, facilitatorsManagersUpdateRequests]).then(() => {
                    return promise();
                });
            }

            return promise();
        });

        // update manager data in participants
        const participantsRequests = dispatch(getCollectionWhere('participants', [['email', '==', email]]));
        const updateManagersInParticipantsCollection = participantsRequests.then(participants => {
            if (participants.length) {
                const participantsUpdateRequests = participants.map(participant => {
                    return getFirebase()
                        .firestore()
                        .collection('participants')
                        .doc(participant.id)
                        .update({ name });
                });

                return Promise.all(participantsUpdateRequests).then(() => {
                    return promise();
                });
            }

            return promise();
        });

        managerRelationsRequests.push(updateManagersInCountries);
        managerRelationsRequests.push(updateManagersInCorporateEntities);
        managerRelationsRequests.push(updateManagersInManagersCollection);
        managerRelationsRequests.push(updateManagersInFacilitatorsManagersCollection);
        managerRelationsRequests.push(updateManagersInParticipantsCollection);

        return Promise.all(managerRelationsRequests).then(() => {
            return promise();
        });
    };
};

export default updateManagersRelations;
