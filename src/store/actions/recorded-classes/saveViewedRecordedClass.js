import { promise } from '../../../helpers';

const saveViewedRecordedClass = ({ profileId, recordedClassId }) => {
    return (dispatch, getState, getFirebase) => {
        if (profileId && recordedClassId) {
            return getFirebase()
                .firestore()
                .collection('recordedClasses')
                .doc(recordedClassId)
                .update({
                    // eslint-disable-next-line
                    viewedBy: getFirebase().firebase_.firestore.FieldValue.arrayUnion(profileId),
                })
                .then(() => {
                    const savedItem = { id: recordedClassId };

                    return promise(savedItem);
                });
        }

        return promise();
    };
};

export default saveViewedRecordedClass;
