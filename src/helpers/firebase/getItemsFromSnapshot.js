export default function getItemsFromSnapshot(querySnapshot) {
    const rows = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });

    return rows;
}
