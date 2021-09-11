const { promise } = require('../../../helpers');

const uploadFile = (refId, file, baseFolder, folder) => {
    return (dispatch, getState, getFirebase) => {
        const attemptRequest = file && file.name && baseFolder && folder && refId;

        if (attemptRequest) {
            const fileExt = file.name.substr(file.name.lastIndexOf('.') + 1);
            const fileName = `${refId}.${fileExt}`;
            const folderRef = `${baseFolder}/${folder}`;
            const filePath = `${folderRef}/${fileName}`;

            return getFirebase()
                .storage()
                .ref(filePath)
                .put(file)
                .then(() => {
                    return getFirebase()
                        .storage()
                        .ref(folderRef)
                        .child(fileName)
                        .getDownloadURL()
                        .then(storageUrl => {
                            return promise({
                                success: true,
                                storageData: {
                                    storageUrl,
                                    storagePath: filePath,
                                    storageFileExt: fileExt,
                                    storageFileName: fileName,
                                },
                            });
                        })
                        .catch(() => {
                            return promise({ success: false });
                        });
                });
        }

        return promise({ success: false });
    };
};

export default uploadFile;
