export default function getVisibilityClass(visibleOn) {
    switch (visibleOn) {
        case 'xs':
            return 'd-block d-sm-none';
        case 'sm':
            return 'd-sm-block d-md-none';
        case 'md':
            return 'd-md-block d-lg-none';
        case 'lg':
            return 'd-lg-block d-xl-none';
        default:
            return '';
    }
}
