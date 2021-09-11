import moment from 'moment';

export default function getCurrentTimestamp() {
    return {
        nanoseconds: 0,
        seconds: moment().unix(),
    };
}
