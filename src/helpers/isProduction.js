import getEnvironment from './getEnvironment';

export default function isProduction() {
    return getEnvironment() === 'production';
}
