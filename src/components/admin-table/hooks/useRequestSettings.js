import { useMemo } from 'react';

export default function useRequestSettings(fieldName, rowLevel, requestsSettings) {
    return useMemo(() => {
        if (requestsSettings && requestsSettings[rowLevel]) {
            return requestsSettings[rowLevel];
        }

        return undefined;

        // eslint-disable-next-line
    }, [fieldName, rowLevel, requestsSettings]);
}
