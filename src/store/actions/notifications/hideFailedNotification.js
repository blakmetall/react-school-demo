import { notificationsTypes } from '../../types';

const hideFailedNotification = () => ({
    type: notificationsTypes.SHOW_FAILED_NOTIFICATION,
    payload: false,
});

export default hideFailedNotification;
