export default function removeArrayDuplicates(array = []) {
    if (array && array.length) {
        return array.filter((item, index) => array.indexOf(item) === index);
    }

    return array;
}
