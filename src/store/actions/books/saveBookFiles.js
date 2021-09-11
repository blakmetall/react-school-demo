import { promise } from '../../../helpers';
import { updateCollectionFiles } from '../firebase';

const saveBookFiles = (item, uploadList) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        return dispatch(updateCollectionFiles('books', uploadList, item.id)).then(uploadedFilesData => {
            if (uploadedFilesData) {
                return promise({
                    ...item,
                    ...uploadedFilesData,
                });
            }

            return promise(item);
        });
    };
};

export default saveBookFiles;
