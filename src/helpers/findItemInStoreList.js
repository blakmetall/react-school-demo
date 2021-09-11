export default function findItemInStoreList(paramMap, storeListMap, urlParams, firestore) {
    if (urlParams && urlParams[paramMap]) {
        const docId = urlParams[paramMap];

        if (firestore && firestore.data && firestore.data[storeListMap]) {
            return {
                ...firestore.data[storeListMap][docId],
                id: docId,
            };
        }
    }

    return undefined;
}
