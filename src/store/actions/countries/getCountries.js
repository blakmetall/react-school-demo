import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const getCountries = ({ where }) => {
    return (dispatch, getState, getFirebase) => {
        // eslint-disable-next-line
        let query = getFirebase()
            .firestore()
            .collection('countries');

        if (where && where.length) {
            for (let i = 0; i < where.length; i += 1) {
                query = query.where(where[i][0], where[i][1], where[i][2]);
            }
        }

        return query.get().then(snapshot => {
            return promise(getItemsFromSnapshot(snapshot));
        });
    };
};

export default getCountries;
