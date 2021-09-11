import { useMemo } from 'react';

export default function useDropdownQuery(row, requestSettings, nextRequestSettings) {
    return useMemo(() => {
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

                                    return arrayList.map(arrayItem => {
                                        const storeRef = `${collection}-${arrayItem}`;

                                        return {
                                            collection,
                                            doc: arrayItem,
                                            storeAs: storeRef,
                                        };
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

        return [];
    }, [row, requestSettings, nextRequestSettings]);
}
