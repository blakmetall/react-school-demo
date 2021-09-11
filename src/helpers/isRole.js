export default function isRole(roleSlug, roleData) {
    return roleData && roleData.slug && roleData.slug === roleSlug;
}
