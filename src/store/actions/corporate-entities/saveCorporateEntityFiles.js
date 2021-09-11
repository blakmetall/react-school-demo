import { promise } from '../../../helpers';
import { updateCollectionFiles } from '../firebase';

const saveCorporateEntityFiles = (item, uploadList) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        // --
        if (uploadList && uploadList.length) {
            return dispatch(updateCollectionFiles('corporateEntities', uploadList, item.id)).then(uploadedFilesData => {
                if (uploadedFilesData) {
                    return promise({
                        ...item,
                        ...uploadedFilesData,
                    });
                }

                return promise(item);
            });
        }

        return promise();
    };
};

export default saveCorporateEntityFiles;
