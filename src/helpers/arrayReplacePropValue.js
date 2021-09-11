export default function arrayReplacePropValue(array, arrayIndex, propName, propValue) {
    if (array && array.length) {
        if (array[arrayIndex]) {
            const tmpArray = [...array];
            tmpArray[arrayIndex][propName] = propValue;

            return tmpArray;
        }

        return array;
    }

    return [];
}
