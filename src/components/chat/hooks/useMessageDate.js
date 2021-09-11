import { useMemo } from 'react';
import { getMessageDate } from '../helpers';

export default function useMessageDate(date, minutes) {
    return useMemo(() => {
        return getMessageDate(date);

        // eslint-disable-next-line
    }, [date, minutes]);
}
