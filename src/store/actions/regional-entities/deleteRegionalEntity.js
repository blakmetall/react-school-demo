import { promise } from '../../../helpers';
import { afterDeleteRegionalEntity } from './index';

const deleteRegionalEntity = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('regionalEntities')
                .doc(itemId)
                .delete()
                .then(() => {
                    const afterDelete = dispatch(afterDeleteRegionalEntity(itemId));

                    return afterDelete.then(() => {
                        return promise();
                    });
                });
        }

        return promise();
    };
};

export default deleteRegionalEntity;
