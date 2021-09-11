import validator from 'validator';
import { hasValidMimeType } from '../../../../../helpers';

const validateBook = (item, { isEditing, isBatch }) => {
    const { name, description, photo, document } = item;

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    if (!description || validator.isEmpty(description, { ignore_whitespace: true })) {
        return false;
    }

    if (!photo) {
        if (!isEditing && !isBatch) {
            return false;
        }
    }

    if (photo && !hasValidMimeType(photo, ['image/jpeg', 'image/png'])) {
        return false;
    }

    if (!document) {
        if (!isEditing && !isBatch) {
            return false;
        }
    }

    if (document && !hasValidMimeType(document, ['application/pdf'])) {
        return false;
    }

    return true;
};

export default validateBook;
