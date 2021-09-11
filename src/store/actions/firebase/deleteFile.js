import { promise } from '../../../helpers';

const deleteFile = filePath => {
    return (dispatch, getState, getFirebase) => {
        if (filePath) {
            return getFirebase()
                .storage()
                .ref()
                .child(filePath)
                .delete()
                .then(() => {
                    return promise(true);
                })
                .catch(() => {
                    return promise(false);
                });
        }

        return promise(false);
    };
};

export default deleteFile;
