import { notificationsTypes } from '../../types';

const hideSuccessNotification = () => ({
    type: notificationsTypes.SHOW_SUCCESS_NOTIFICATION,
    payload: false,
});

export default hideSuccessNotification;
