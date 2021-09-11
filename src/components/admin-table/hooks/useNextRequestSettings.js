import { useMemo } from 'react';

export default function useNextRequestSettings(fieldName, rowLevel, requestsSettings) {
    return useMemo(() => {
        if (requestsSettings && requestsSettings[rowLevel]) {
            const requestSetting = requestsSettings[rowLevel];
            const nextRequestSetting = requestsSettings[rowLevel + 1];

            const isTriggerField =
                requestSetting.firebase &&
                requestSetting.firebase.dropdown &&
                requestSetting.firebase.dropdown.triggerField &&
                requestSetting.firebase.dropdown.triggerField === fieldName;

            if (isTriggerField && nextRequestSetting) {
                return nextRequestSetting;
            }
        }

        return undefined;
    }, [fieldName, rowLevel, requestsSettings]);
}
