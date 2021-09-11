import { promise } from '../../../helpers';
import { deleteUnusedFiles, findDocInCollection, uploadFiles, updateCollection } from '.';

const updateCollectionFiles = (collection, uploadList, docId) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const attemptRequest = collection && docId && uploadList && uploadList.length;

        if (attemptRequest) {
            return dispatch(findDocInCollection(collection, docId)).then(collectionItem => {
                return dispatch(uploadFiles(uploadList, docId)).then(uploadResponses => {
                    if (uploadResponses.length) {
                        const uploadedFilesData = {};

                        uploadResponses.forEach(uploadResponse => {
                            const { success, storageData, uploadItem } = uploadResponse;
                            const { dbField } = uploadItem;

                            if (success) {
                                uploadedFilesData[dbField] = storageData;
                            }
                        });

                        return dispatch(updateCollection(collection, uploadedFilesData, docId)).then(() => {
                            return dispatch(deleteUnusedFiles(collectionItem, uploadedFilesData)).then(() => {
                                return promise(uploadedFilesData);
                            });
                        });
                    }

                    return promise();
                });
            });
        }

        return promise();
    };
};

export default updateCollectionFiles;
