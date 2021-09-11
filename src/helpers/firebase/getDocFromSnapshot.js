export default function getDocFromSnapshot(doc) {
    if (doc.id) {
        return { ...doc.data(), id: doc.id };
    }

    return undefined;
}
