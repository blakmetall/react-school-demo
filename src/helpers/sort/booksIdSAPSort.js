export default function booksIdSAPSort(a, b) {
    if (a.idSAP && b.corporateEntityName) {
        if (a.idSAP.toUpperCase() > b.idSAP.toUpperCase()) return 1;
        if (b.idSAP.toUpperCase() > a.idSAP.toUpperCase()) return -1;
    }

    return 0;
}
