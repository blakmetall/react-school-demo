import { promise, objectKeysToArray } from '../../../helpers';
import { getCollectionWhere } from '../firebase';
import { findCourseAssignationLicenses, getCourseAssignationUsedLicenses } from '../courses-assignations';

const validateOnSaveRegionalEntity = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const validateLicensesAvailability = () => {
            const { coursesLicenses } = item;

            if (coursesLicenses) {
                const reqs = objectKeysToArray(coursesLicenses).map(cl => {
                    const { id: licenseId, courseId, courseAssignationId, corporateEntityId, licenses, courseName } = cl;

                    const r1 = dispatch(findCourseAssignationLicenses(corporateEntityId, courseId));
                    const r2 = dispatch(getCourseAssignationUsedLicenses({ courseAssignationId, licenseId }));

                    return Promise.all([r1, r2]).then(responses => {
                        const registeredLicenses = responses[0];
                        const usedLicenses = responses[1];

                        // console.log('registeredLicenses', registeredLicenses);
                        // console.log('usedLicenses', usedLicenses);

                        const newUsedLicenses = usedLicenses + licenses;

                        if (newUsedLicenses > registeredLicenses) {
                            return promise({
                                success: false,
                                courseName,
                            });
                        }

                        return promise({ success: true });
                    });
                });

                return Promise.all(reqs).then(responses => {
                    // console.log('responses', responses);

                    if (responses.length) {
                        const filtered = responses.filter(v => !v.success);

                        // console.log('filtered', filtered);

                        if (filtered.length) {
                            return promise({
                                courseName: filtered[0].courseName,
                            });
                        }
                    }

                    return promise();
                });
            }

            return promise();
        };

        const { id: regionalEntityId, name, corporateEntityId } = item;

        const regionalEntitiesRequest = dispatch(
            getCollectionWhere('regionalEntities', [
                ['name', '==', name],
                ['corporateEntityId', '==', corporateEntityId],
            ]),
        );

        const validateLicensesAvailabilityRequest = validateLicensesAvailability();

        return Promise.all([regionalEntitiesRequest, validateLicensesAvailabilityRequest]).then(responses => {
            const regionalEntities = responses[0];
            const hasLicensesErrors = responses[1];

            if (regionalEntities.length) {
                const found = regionalEntities.filter(regionalEntity => {
                    if (regionalEntity.id === regionalEntityId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'La entidad corporativa y entidad regional enviados ya se encuentran registrados.',
                    });
                }
            }

            if (hasLicensesErrors) {
                const { courseName } = hasLicensesErrors;

                return promise({
                    success: false,
                    errorMsg: `El curso '${courseName}' no cuenta con licencias disponibles.`,
                });
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveRegionalEntity;
