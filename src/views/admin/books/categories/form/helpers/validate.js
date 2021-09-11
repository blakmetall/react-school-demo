import validator from 'validator';

const validateCategory = item => {
    const { name, iconSlug } = item;

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    if (!iconSlug || validator.isEmpty(iconSlug, { ignore_whitespace: true })) {
        return false;
    }

    return true;
};

export default validateCategory;
