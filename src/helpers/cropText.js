export default function cropText(text, maxLength) {
    if (text && maxLength && text.length > maxLength) {
        return `${text.substr(0, maxLength)}...`;
    }

    return text;
}
