import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../../../components';
import { useLicenseAvailability } from './hooks';
import store from '../../../store';

const LicenseAvailabilityTd = ({ item }) => {
    const { corporateEntityId, licenses } = item;

    const licenseAvailability = useLicenseAvailability(corporateEntityId, licenses, store);

    if (licenseAvailability) {
        return <div>{licenseAvailability}</div>;
    }

    return <Spinner size="xx-small" />;
};

LicenseAvailabilityTd.propTypes = {
    item: PropTypes.any,
};

LicenseAvailabilityTd.defaultProps = {
    item: undefined,
};

export default LicenseAvailabilityTd;
