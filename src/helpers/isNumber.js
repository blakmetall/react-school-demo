export default function isNumber(value) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
}
