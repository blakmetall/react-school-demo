export default function arrayToObjectKeys(array, mapKey) {
    const obj = {};

    if (array && array.length) {
        array.forEach(item => {
            if (mapKey && item[mapKey]) {
                obj[item[mapKey]] = item;
            } else if (item.id) {
                obj[item.id] = item;
            } else if (item[0] && typeof item[0] === 'string') {
                obj[item[0]] = item;
            }
        });
    }

    return obj;
}
