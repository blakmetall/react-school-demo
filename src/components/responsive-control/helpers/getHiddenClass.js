export default function getHiddenClass(hiddenOn) {
    switch (hiddenOn) {
        case 'xs':
            return 'd-none d-sm-block';
        case 'sm':
            return 'd-none d-md-block';
        case 'md':
            return 'd-none d-lg-block';
        case 'lg':
            return 'd-none d-xl-block';
        default:
            return '';
    }
}
