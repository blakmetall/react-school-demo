import { useState, useEffect } from 'react';
import { promise } from '../../../../helpers';
import { getCoursesAssignations, getCourseAssignationUsedLicenses } from '../../../../store/actions/courses-assignations';
import store from '../../../../store';

const useCoursesAssignedOptions = ({ corporateEntityId, prevCoursesLicenses }) => {
    const [coursesAssigned, setCoursesAssigned] = useState([]);
    const { dispatch } = store;

    useEffect(() => {
        // find courses assigned to a corporate entity
        if (corporateEntityId) {
            dispatch(
                getCoursesAssignations({
                    where: [['corporateEntityId', '==', corporateEntityId]],
                }),
            ).then(coursesAssignations => {
                Promise.all(
                    coursesAssignations.map(courseAssignation => {
                        const { id: courseAssignationId } = courseAssignation;

                        return dispatch(getCourseAssignationUsedLicenses({ courseAssignationId })).then(usedLicenses =>
                            promise({
                                label: courseAssignation.courseName,
                                value: courseAssignationId,
                                raw: {
                                    ...courseAssignation,
                                    usedLicenses,
                                },
                            }),
                        );
                    }),
                ).then(coursesAssignedOptions => {
                    setCoursesAssigned(coursesAssignedOptions);
                });
            });
        }

        // eslint-disable-next-line
    }, [corporateEntityId, prevCoursesLicenses]);

    return coursesAssigned;
};

export default useCoursesAssignedOptions;
