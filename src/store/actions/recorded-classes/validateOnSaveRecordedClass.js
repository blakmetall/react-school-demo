import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveRecordedClass = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: classId, groupId, videoURL } = item;

        const requests = dispatch(
            getCollectionWhere('recordedClasses', [
                ['groupId', '==', groupId],
                ['videoURL', '==', videoURL],
            ]),
        );

        return requests.then(classes => {
            if (classes.length) {
                const found = classes.filter(clazz => {
                    if (clazz.id === classId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'El video ya se encuentra registrado en este curso.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveRecordedClass;
