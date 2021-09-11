export default function snapshotHasItems(querySnapshot) {
    return !!(querySnapshot.docs && querySnapshot.docs.length) || false;
}
