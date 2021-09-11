const { promise } = require('../../../helpers');

const findBookByIdSAP = idSAP => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('books')
            .where('idSAP', '==', idSAP)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.isEmpty) {
                    const found = {};

                    querySnapshot.forEach(doc => {
                        found.data = { ...doc.data(), id: doc.id };
                    });

                    return found.data;
                }

                return promise();
            });
    };
};

export default findBookByIdSAP;
