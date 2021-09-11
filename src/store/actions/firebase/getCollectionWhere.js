import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const getCollectionWhere = (collection, whereList) => {
    return (dispatch, getState, getFirebase) => {
        if (collection && whereList && whereList.length) {
            // eslint-disable-next-line
            let query = getFirebase()
                .firestore()
                .collection(collection);

            for (let i = 0; i < whereList.length; i += 1) {
                const where = whereList[i];
                query = query.where(where[0], where[1], where[2]);
            }

            return query.get().then(snapshot => {
                return promise(getItemsFromSnapshot(snapshot));
            });
        }

        return promise(undefined);
    };
};

export default getCollectionWhere;
