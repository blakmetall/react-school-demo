import validator from 'validator';
import { hasValidMimeType } from '../../../../../helpers';

const validateCorporateEntity = (item, { isEditing, isBatch }) => {
    const { countryId, name, managerName, managerEmail, postalCode, logo } = item;

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    if (!managerName || validator.isEmpty(managerName, { ignore_whitespace: true })) {
        return false;
    }

    if (!managerEmail || validator.isEmpty(managerEmail, { ignore_whitespace: true }) || !validator.isEmail(managerEmail)) {
        return false;
    }

    if (!postalCode || validator.isEmpty(postalCode, { ignore_whitespace: true })) {
        return false;
    }

    if (!isBatch) {
        if (!countryId || validator.isEmpty(countryId, { ignore_whitespace: true })) {
            return false;
        }
    }

    if (!logo) {
        if (!isEditing && !isBatch) {
            return false;
        }
    }

    if (logo && !hasValidMimeType(logo, ['image/jpeg', 'image/png'])) {
        return false;
    }

    return true;
};

export default validateCorporateEntity;
