import { useState } from 'react';
import { findCourseAssignationLicenses } from '../../../../store/actions/courses-assignations';

const useLicenses = (corporateEntityId, store) => {
    const [licenses, setLicenses] = useState('');

    if (corporateEntityId) {
        const request = store.dispatch(findCourseAssignationLicenses(corporateEntityId));

        request.then(totalLicenses => {
            setLicenses(totalLicenses);
        });
    }

    return licenses;
};

export default useLicenses;
