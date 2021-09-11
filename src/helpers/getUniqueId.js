let idCounter = 0;

export default function getUniqueId(prefix) {
    // eslint-disable-line
    idCounter += 1;
    return prefix ? `${prefix}-${idCounter}` : String(idCounter);
}
