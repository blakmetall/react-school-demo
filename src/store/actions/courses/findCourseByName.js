const { promise } = require('../../../helpers');

const findCourseByName = name => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('courses')
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

export default findCourseByName;
