import { notificationsTypes } from '../../types';

const showBatchResultsNotification = batchResults => ({
    type: notificationsTypes.SHOW_BATCH_RESULTS_NOTIFICATION,
    payload: {
        showBatchResults: true,
        batchResults,
    },
});

export default showBatchResultsNotification;
