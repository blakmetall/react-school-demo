import store from '../../../store';

export default function useDropdownRows(row, requestSettings, nextRequestSettings) {
    const { firestore } = store.getState();

    if (row && requestSettings && nextRequestSettings) {
        const { originalData } = row;
        const { firebase } = requestSettings;

        if (firebase) {
            const { dropdown } = firebase;

            if (dropdown) {
                const { relationField, relationFieldType } = dropdown;

                if (nextRequestSettings.firebase) {
                    const { collection } = nextRequestSettings.firebase;

                    if (collection) {
                        switch (relationFieldType) {
                            case 'array': {
                                const arrayList = (originalData && originalData[relationField]) || [];

                                return arrayList
                                    .filter(arrayItem => {
                                        const storeRef = `${collection}-${arrayItem}`;

                                        if (firestore.ordered && firestore.ordered[storeRef]) {
                                            return true;
                                        }

                                        return false;
                                    })
                                    .map(arrayItem => {
                                        const storeRef = `${collection}-${arrayItem}`;

                                        return firestore.ordered[storeRef][0];
                                    });
                            }
                            default:
                                return [];
                        }
                    }
                }
            }
        }
    }

    return undefined;
}
