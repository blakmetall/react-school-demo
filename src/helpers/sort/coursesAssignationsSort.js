export default function coursesAssignationsSort(a, b) {
    if (a.corporateEntityName && b.corporateEntityName) {
        if (a.corporateEntityName.toUpperCase() > b.corporateEntityName.toUpperCase()) return 1;
        if (b.corporateEntityName.toUpperCase() > a.corporateEntityName.toUpperCase()) return -1;
    }

    if (a.courseName && b.courseName) {
        if (a.courseName.toUpperCase() > b.courseName.toUpperCase()) return 1;
        if (b.courseName.toUpperCase() > a.courseName.toUpperCase()) return -1;
    }

    return 0;
}
