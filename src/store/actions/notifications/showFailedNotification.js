import { notificationsTypes } from '../../types';
import { isDevelopment, isProduction } from '../../../helpers';

const prepareErrorMessage = (message, name) => {
    // eslint-disable-next-line
    let errorMessage = '';

    if (isDevelopment()) {
        errorMessage += '(Development) -- ';
        errorMessage += (name && `${name}: `) || '';
        errorMessage += message || '';
    }

    if (isProduction()) {
        errorMessage += 'Lo sentímos, ocurrió un error inesperado.';
    }

    return errorMessage;
};

const getErrorMessage = error => {
    if (typeof error === 'string') {
        return prepareErrorMessage(error);
    }

    if (error && error.message) {
        return prepareErrorMessage(error.message, error.name);
    }

    if (error && error.code) {
        prepareErrorMessage(error.code, error.name);
    }

    return '';
};

const showFailedNotification = error => {
    return {
        type: notificationsTypes.SHOW_FAILED_NOTIFICATION,
        payload: { status: true, errorMsg: getErrorMessage(error) },
    };
};

export default showFailedNotification;
