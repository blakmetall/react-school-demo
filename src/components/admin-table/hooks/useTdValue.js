import React from 'react';
import moment from 'moment';
import store from '../../../store';
import { promise } from '../../../helpers';
import { findDocInCollection } from '../../../store/actions/firebase';
import Preview from '../preview';

export default function useTdValue(fieldValue, fieldType, fieldTypeSettings, row) {
    if (fieldValue && fieldType) {
        const { storageUrl } = fieldValue;

        if (fieldType === 'text') {
            return fieldValue;
        }

        if (fieldType === 'date' && fieldValue.seconds) {
            return moment.unix(fieldValue.seconds).format('MM-DD-YYYY');
        }

        if (fieldType === 'preview-image' && storageUrl) {
            return <Preview src={storageUrl} />;
        }

        if (fieldType === 'preview-pdf' && storageUrl) {
            return <Preview src={storageUrl} type="pdf" />;
        }

        if (fieldType === 'firebase-request' && fieldTypeSettings) {
            const { dispatch } = store;
            const { collection, attribute } = fieldTypeSettings;

            if (collection && attribute) {
                return dispatch(findDocInCollection(collection, fieldValue))
                    .then(item => {
                        if (item[attribute]) {
                            return promise(item[attribute]);
                        }

                        return promise('');
                    })
                    .finally(() => promise(''));
            }
        }

        if (fieldType === 'render' && row && fieldTypeSettings) {
            const { component: TdComponent } = fieldTypeSettings;
            const { originalData: rowData } = row;

            if (TdComponent && rowData) {
                return <TdComponent item={rowData} />;
            }
        }

        return '';
    }

    return fieldValue;
}
