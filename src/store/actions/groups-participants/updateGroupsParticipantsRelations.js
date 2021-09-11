import { promise } from '../../../helpers';

// revisar: actualizar grupos relacionados

// eslint-disable-next-line
const updateGroupsParticipantsRelations = (item, docId) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            // return getFirebase()
            //     .firestore()
            //     .collection('groupsParticipants')
            //     .where('courseId', '==', docId)
            //     .get()
            //     .then(querySnapshot => {
            //         querySnapshot.forEach(doc => {
            //             getFirebase()
            //                 .firestore()
            //                 .collection('groupsParticipants')
            //                 .doc(doc.id)
            //                 .update({
            //                     courseName: item.name || '',
            //                 });
            //         });
            //         return promise();
            //     });
        }

        return promise();
    };
};

export default updateGroupsParticipantsRelations;
