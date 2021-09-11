import { useMemo } from 'react';

export default function useExpandPosition(isExpandable, fieldValue) {
    return useMemo(() => {
        if (isExpandable && fieldValue && fieldValue.expand) {
            return fieldValue.expand.position || 'right';
        }

        return 'right';
    }, [isExpandable, fieldValue]);
}
