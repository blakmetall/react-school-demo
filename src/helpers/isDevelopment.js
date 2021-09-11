import getEnvironment from './getEnvironment';

export default function isDevelopment() {
    return getEnvironment() === 'development';
}
