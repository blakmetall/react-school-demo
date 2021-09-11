import { promise } from '../../../helpers';
import { getDocFromSnapshot } from '../../../helpers/firebase';
import { getGroupsParticipantsItems } from './index';

const getGroupsParticipantsItem = ({ docId, where }) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .doc(docId)
                .get()
                .then(doc => promise(getDocFromSnapshot(doc)));
        }

        if (where) {
            return dispatch(getGroupsParticipantsItems({ where })).then(items => promise((items && items[0]) || undefined));
        }

        return promise(undefined);
    };
};

export default getGroupsParticipantsItem;
