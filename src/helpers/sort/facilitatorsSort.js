export default function facilitatorsSort(a, b) {
    if (a.corporateEntityName && b.corporateEntityName) {
        if (a.corporateEntityName.toUpperCase() > b.corporateEntityName.toUpperCase()) return 1;
        if (b.corporateEntityName.toUpperCase() > a.corporateEntityName.toUpperCase()) return -1;
    }

    if (a.regionalEntityName && b.regionalEntityName) {
        if (a.regionalEntityName.toUpperCase() > b.regionalEntityName.toUpperCase()) return 1;
        if (b.regionalEntityName.toUpperCase() > a.regionalEntityName.toUpperCase()) return -1;
    }

    if (a.name && b.name) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;
    }

    return 0;
}
