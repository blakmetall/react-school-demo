export default function coursesSort(a, b) {
    if (a.name && b.name) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;
    }

    if (a.categoryName && b.categoryName) {
        if (a.categoryName.toUpperCase() > b.categoryName.toUpperCase()) return 1;
        if (b.categoryName.toUpperCase() > a.categoryName.toUpperCase()) return -1;
    }

    return 0;
}
