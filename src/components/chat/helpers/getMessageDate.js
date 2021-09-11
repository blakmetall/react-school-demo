import moment from 'moment';

export default function getHour(date) {
    if (date && date.seconds) {
        const now = moment();
        const momentDate = moment.unix(date.seconds);

        if (now && momentDate) {
            return momentDate.from(now);
        }
    }

    return '';
}
