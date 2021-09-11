export default function regionalEntitiesSort(a, b) {
    if (a.corporateEntityName && b.corporateEntityName) {
        if (a.corporateEntityName.toUpperCase() > b.corporateEntityName.toUpperCase()) return 1;
        if (b.corporateEntityName.toUpperCase() > a.corporateEntityName.toUpperCase()) return -1;
    }

    if (a.name && b.name) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;
    }

    return 0;
}
