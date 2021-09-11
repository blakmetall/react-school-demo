import { promise } from '../../../helpers';
import { uploadFile } from '.';

const uploadFiles = (uploadList, docId) => {
    return (dispatch, getState, getFirebase) => {
        const attemptRequest = uploadList && uploadList.length && docId;

        if (attemptRequest) {
            const uploadRequests = uploadList.map(uploadItem => {
                const { file, dbField, baseFolder, fileFolder } = uploadItem;
                const attemptUpload = file && dbField && baseFolder && fileFolder;

                if (attemptUpload) {
                    const uploadRequest = dispatch(uploadFile(docId, file, baseFolder, fileFolder));

                    return uploadRequest
                        .then(response => {
                            const { success, storageData } = response;
                            return promise({ success, storageData, uploadItem });
                        })
                        .catch(() => {
                            return promise({ success: false });
                        });
                }

                return promise({ success: false });
            });

            return Promise.all(uploadRequests).then(uploadResponses => {
                return promise(uploadResponses);
            });
        }

        return promise([]);
    };
};

export default uploadFiles;
