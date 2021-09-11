import PropTypes from 'prop-types';
import { promise } from '../../../helpers';
import { getLicenses } from '../licenses';
import { getCourseAssignation } from './index';

const getCourseAssignationUsedLicenses = ({ courseAssignationId, licenseId }) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        // request
        const makeRequest = (corporateEntityId, courseId) => {
            return dispatch(
                getLicenses({
                    where: [
                        ['corporateEntityId', '==', corporateEntityId],
                        ['courseId', '==', courseId],
                    ],
                }),
            ).then(licenses => {
                // skip license count when attempt to validate available licenses on edit mode
                const filtered = licenseId ? licenses.filter(item => item.id !== licenseId) : licenses;

                // eslint-disable-next-line
                let usedLicenses = 0;

                if (filtered.length) {
                    usedLicenses = filtered.map(item => item.licenses).reduce((sum, used) => sum + used);
                }

                return promise(usedLicenses);
            });
        };

        // request if sent courseAssignationId
        if (courseAssignationId) {
            return dispatch(getCourseAssignation({ docId: courseAssignationId })).then(item => {
                if (item) {
                    const { corporateEntityId, courseId } = item;

                    return makeRequest(corporateEntityId, courseId);
                }

                return promise(0);
            });
        }

        return promise(0);
    };
};

getCourseAssignationUsedLicenses.propTypes = {
    courseAssignationId: PropTypes.string,
    licenseId: PropTypes.string,
};

getCourseAssignationUsedLicenses.defaultProps = {
    courseAssignationId: undefined,
    licenseId: '',
};

export default getCourseAssignationUsedLicenses;
