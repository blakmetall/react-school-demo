import { notificationsTypes } from '../../types';

const showSuccessNotification = () => ({
    type: notificationsTypes.SHOW_SUCCESS_NOTIFICATION,
    payload: true,
});

export default showSuccessNotification;
