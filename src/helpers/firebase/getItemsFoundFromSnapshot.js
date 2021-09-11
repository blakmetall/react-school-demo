export default function getItemsFoundFromSnapshot(querySnapshot) {
    const results = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });

    return results.length;
}
