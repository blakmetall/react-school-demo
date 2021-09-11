const { promise } = require('../../../helpers');

const findCategoryByName = name => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('categories')
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

export default findCategoryByName;
