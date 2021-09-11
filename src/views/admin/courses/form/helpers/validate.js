import validator from 'validator';

const validateCourse = item => {
    const { name, categoryId, booksIds } = item;

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        return false;
    }

    if (!categoryId || validator.isEmpty(categoryId, { ignore_whitespace: true })) {
        return false;
    }

    if (!booksIds || (booksIds && !booksIds.length)) {
        return false;
    }

    if (booksIds && booksIds.length) {
        const found = booksIds.filter(bookId => bookId);

        if (found.length !== booksIds.length) {
            return false;
        }
    }

    return true;
};

export default validateCourse;
