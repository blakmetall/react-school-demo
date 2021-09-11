export default function courseForumsSort(a, b) {
    if (a.title && b.title) {
        if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
        if (b.title.toUpperCase() > a.title.toUpperCase()) return -1;
    }

    return 0;
}
