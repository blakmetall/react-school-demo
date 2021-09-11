export default function getFirstItemFromSnapshot(querySnapshot) {
    const results = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });

    if (results.length) {
        return results[0];
    }

    return undefined;
}
