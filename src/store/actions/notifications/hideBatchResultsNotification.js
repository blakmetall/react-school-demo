import { notificationsTypes } from '../../types';

const hideBatchResultsNotification = () => ({
    type: notificationsTypes.SHOW_BATCH_RESULTS_NOTIFICATION,
    payload: {
        showBatchResults: false,
        batchResults: {},
    },
});

export default hideBatchResultsNotification;
