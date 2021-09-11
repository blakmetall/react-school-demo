export default function hasValidMimeType(file, allowedMimeTypes = []) {
    const { type } = file;

    if (type) {
        const foundValidMimeType = allowedMimeTypes.find(mime => mime === type);

        if (foundValidMimeType) {
            return true;
        }
    }

    return false;
}
