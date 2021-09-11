export default function objectKeysToArray(object) {
    if (object) {
        return Object.keys(object).map(key => object[key]);
    }

    return [];
}
