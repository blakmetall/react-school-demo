import { promise } from '../../../helpers';
import { updateManagersRelations } from '../general';

const updateFacilitatorsItemManagers = (docId, managers) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = managers.map(manager => {
                const {
                    name,
                    email,
                    conferenceAccount,
                    conferencePassword,
                    conferenceCancelDate,
                    statusSlug,
                    statusName,
                } = manager;

                return getFirebase()
                    .firestore()
                    .collection('facilitatorsManagers')
                    .where('email', '==', email)
                    .where('facilitatorItemId', '==', docId)
                    .get()
                    .then(searchSnapshot => {
                        const managerFound = !searchSnapshot.empty;

                        if (managerFound) {
                            const managerDocId = searchSnapshot.docs[0].id;

                            return getFirebase()
                                .firestore()
                                .collection('facilitatorsManagers')
                                .doc(managerDocId)
                                .update({
                                    name,
                                    conferenceAccount,
                                    conferencePassword,
                                    conferenceCancelDate,
                                    statusSlug,
                                    statusName,
                                })
                                .then(() => {
                                    return dispatch(updateManagersRelations(name, email)).then(() => {
                                        return promise({
                                            ...searchSnapshot.docs[0].data(),
                                            id: managerDocId,
                                            name,
                                        });
                                    });
                                });
                        }

                        const newManager = {
                            name,
                            email,
                            facilitatorItemId: docId,
                            isFacilitator: true,
                            conferenceAccount,
                            conferencePassword,
                            conferenceCancelDate,
                            statusSlug,
                            statusName,
                        };

                        return getFirebase()
                            .firestore()
                            .collection('facilitatorsManagers')
                            .add(newManager)
                            .then(docRef => {
                                return dispatch(updateManagersRelations(name, email)).then(() => {
                                    return promise({
                                        ...newManager,
                                        id: docRef.id,
                                    });
                                });
                            });
                    });
            });

            return Promise.all(asyncRequests).then(responses => {
                const managersIds = responses.map(manager => manager.id);
                const managersSaved = responses.filter(manager => manager.id);

                return getFirebase()
                    .firestore()
                    .collection('facilitators')
                    .doc(docId)
                    .update({ managersIds })
                    .then(() => {
                        return promise({ success: true, managersSaved });
                    });
            });
        }

        return promise({ success: false, managersSaved: [] });
    };
};

export default updateFacilitatorsItemManagers;
