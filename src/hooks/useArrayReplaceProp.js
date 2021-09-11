import { useMemo } from 'react';

export default function useArrayReplaceProp(array, arrIndex, propName, propValue) {
    return useMemo(() => {
        if (array && array.length) {
            if (array[arrIndex]) {
                const tmpData = [...array];
                tmpData[arrIndex][propName] = propValue;
                return tmpData;
            }

            return array;
        }

        return [];
    }, [array, arrIndex, propName, propValue]);
}
