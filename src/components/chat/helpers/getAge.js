import moment from 'moment';

export default function getAge(timestamp) {
    if (timestamp) {
        const baseDate = moment.unix(timestamp);
        return moment().diff(baseDate, 'years');
    }

    return 0;
}
