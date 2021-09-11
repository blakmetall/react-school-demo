import { useState } from 'react';
import { findCorporateEntitiesUsedLicenses } from '../../../../store/actions/facilitators-groups';

const useLicenseAvailability = (corporateEntityId, licenses, store) => {
    const [licenseAvailability, setLicenseAvailability] = useState('');

    const request = store.dispatch(findCorporateEntitiesUsedLicenses(corporateEntityId));

    request.then(usedLicenses => {
        const value = `${usedLicenses}/${licenses}`;
        setLicenseAvailability(value);
    });

    return licenseAvailability;
};

export default useLicenseAvailability;
