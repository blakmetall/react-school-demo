export default function getSubcollectionConfig(collection, subcollections) {
    const shouldPrepareConfig = !!collection && !!subcollections && subcollections.length;

    if (shouldPrepareConfig) {
        return subcollections.map(subcollection => ({
            collection: subcollection,
        }));
    }

    return undefined;
}
