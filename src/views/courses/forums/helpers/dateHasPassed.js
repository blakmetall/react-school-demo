import moment from 'moment';

export default function dateHasPassed(date) {
    if (date && date.seconds) {
        const now = moment();
        const compare = moment.unix(date.seconds);

        return compare.isBefore(now);
    }

    return false;
}
