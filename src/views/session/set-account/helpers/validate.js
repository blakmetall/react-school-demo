import validator from 'validator';
import { isProduction } from '../../../../helpers';

const validateSetAccount = item => {
    const { password, passwordRepeat, policiesAccepted, reCaptchaToken } = item;

    if (!password || validator.isEmpty(password, { ignore_whitespace: true })) {
        return false;
    }

    if (!passwordRepeat || validator.isEmpty(passwordRepeat, { ignore_whitespace: true })) {
        return false;
    }

    if (password !== passwordRepeat) {
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

export default validateSetAccount;
