import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const getCorporateEntities = ({ where }) => {
    return (dispatch, getState, getFirebase) => {
        // eslint-disable-next-line
        let query = getFirebase()
            .firestore()
            .collection('corporateEntities');

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

export default getCorporateEntities;
