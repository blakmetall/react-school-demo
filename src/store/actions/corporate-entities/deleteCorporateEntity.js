import { promise } from '../../../helpers';
import { afterDeleteCorporateEntity } from './index';

const deleteCorporateEntity = (docId, corporateEntity) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('corporateEntities')
                .doc(docId)
                .delete()
                .then(() => {
                    const afterDeleteProcess = dispatch(afterDeleteCorporateEntity(docId, corporateEntity));

                    return afterDeleteProcess.then(() => {
                        return promise(true);
                    });
                });
        }

        return promise();
    };
};

export default deleteCorporateEntity;
