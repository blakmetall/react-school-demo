export default function compareDate(a, b) {
    if (a.date && a.date.seconds && b.date && b.date.seconds) {
        if (a.date.seconds < b.date.seconds) {
            return -1;
        }
        if (a.date.seconds > b.date.seconds) {
            return 1;
        }
    }

    return 0;
}
