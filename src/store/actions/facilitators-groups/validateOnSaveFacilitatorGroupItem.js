import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';
import { findCourseAssignationLicenses, findCourseAssignationUsedLicenses } from '../courses-assignations';

const validateOnSaveFacilitatorGroupItem = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const {
            id: facilitatorGroupId,
            corporateEntityId,
            regionalEntityId,
            learningCommunityId,
            facilitatorId,
            groupId,
            isEditing,
        } = item;

        const findTotalLicensesRequest = dispatch(findCourseAssignationLicenses(corporateEntityId));

        return findTotalLicensesRequest.then(totalLicenses => {
            const findUsedLicensesRequest = dispatch(findCourseAssignationUsedLicenses(corporateEntityId));

            return findUsedLicensesRequest.then(usedLicenses => {
                const licenseLimit = isEditing ? totalLicenses + 1 : totalLicenses;

                if (usedLicenses >= licenseLimit) {
                    return promise({
                        success: false,
                        errorMsg: 'Se agotaron las licencias.',
                    });
                }

                const facilitatorsGroupsRequest = dispatch(
                    getCollectionWhere('facilitatorsGroups', [
                        ['corporateEntityId', '==', corporateEntityId],
                        ['regionalEntityId', '==', regionalEntityId],
                        ['learningCommunityId', '==', learningCommunityId],
                        ['facilitatorId', '==', facilitatorId],
                        ['groupId', '==', groupId],
                    ]),
                );

                return facilitatorsGroupsRequest.then(facilitatorsGroups => {
                    if (facilitatorsGroups.length) {
                        const found = facilitatorsGroups.filter(facilitatorGroup => {
                            if (facilitatorGroup.id === facilitatorGroupId) {
                                return false;
                            }

                            return true;
                        });

                        if (found.length) {
                            return promise({
                                success: false,
                                errorMsg:
                                    'El grupo ya fue asignado a otro facilitador para la comunidad de aprendizaje seleccionada.',
                            });
                        }
                    }

                    return promise({ success: true });
                });
            });
        });
    };
};

export default validateOnSaveFacilitatorGroupItem;
