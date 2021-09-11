const { promise } = require('../../../helpers');

const findBookByName = name => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('books')
            .where('name', '==', name)
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

export default findBookByName;
