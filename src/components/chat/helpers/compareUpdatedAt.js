export default function compareUpdatedAt(a, b) {
    if (a.updatedAt && a.updatedAt.seconds && b.updatedAt && b.updatedAt.seconds) {
        if (a.updatedAt.seconds < b.updatedAt.seconds) {
            return -1;
        }
        if (a.updatedAt.seconds > b.updatedAt.seconds) {
            return 1;
        }
    }

    return 0;
}
