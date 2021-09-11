import _ from 'lodash';
import { promise } from '../../../helpers';
import { deleteFile } from '.';

const deleteUnUsedFiles = (collectionItem, uploadedFilesData) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        if (uploadedFilesData) {
            const deletableItems = Object.keys(uploadedFilesData)
                .map(dbField => {
                    const uploadedFile = uploadedFilesData[dbField];
                    const hasPreviousFileData = collectionItem && collectionItem[dbField];

                    if (hasPreviousFileData && !_.isEqual(uploadedFile.storagePath, collectionItem[dbField].storagePath)) {
                        return collectionItem[dbField];
                    }

                    return undefined;
                })
                .filter(item => item !== undefined);

            if (deletableItems.length) {
                const deleteRequests = deletableItems.map(deletableItem => {
                    return dispatch(deleteFile(deletableItem.storagePath));
                });

                return Promise.all(deleteRequests).then(deleteResponses => {
                    return promise(deleteResponses);
                });
            }
        }

        return promise();
    };
};

export default deleteUnUsedFiles;
