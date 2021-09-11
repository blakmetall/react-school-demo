import { getMenuByRoleSlug } from './index';

export default function getAfterSuccessLoginUrl(roleSlug) {
    const menu = getMenuByRoleSlug(roleSlug);

    if (menu && menu[0]) {
        return menu[0].url;
    }

    return '/';
}
