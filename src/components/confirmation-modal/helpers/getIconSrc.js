export default function getIconSrc(icon) {
    if (icon) {
        if (icon === 'danger') {
            return '/img/icons/confirmation-modal/danger.svg';
        }

        if (icon === 'error') {
            return '/img/icons/confirmation-modal/error.svg';
        }

        if (icon === 'success') {
            return '/img/icons/confirmation-modal/success.svg';
        }

        if (icon === 'warning') {
            return '/img/icons/confirmation-modal/warning.svg';
        }
    }

    return '';
}
