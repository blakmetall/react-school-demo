import validator from 'validator';
import { isProduction } from '../../../../helpers';

const validateLogin = item => {
    const { email, password, policiesAccepted, reCaptchaToken } = item;

    if (validator.isEmpty(email, { ignore_whitespace: true }) || !validator.isEmail(email)) {
        return false;
    }

    if (validator.isEmpty(password, { ignore_whitespace: true })) {
        return false;
    }

    if (!policiesAccepted) {
        return false;
    }

    if (isProduction() && reCaptchaToken === undefined) {
        return false;
    }

    return true;
};

export default validateLogin;
