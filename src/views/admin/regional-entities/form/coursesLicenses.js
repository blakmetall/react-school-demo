import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Input, Select } from '../../../../components';
import { useCoursesAssignedOptions } from '../../courses-assignations/hooks';
import { arrayToObjectKeys } from '../../../../helpers';

const CoursesAssignedSelectable = ({ corporateEntityId, prevCoursesLicenses, onChange, className }) => {
    const coursesAssignedOptions = useCoursesAssignedOptions({ corporateEntityId, prevCoursesLicenses });

    const [coursesAssignedLicenses, setCoursesAssignedLicenses] = useState({});

    // initialize
    useEffect(() => {
        if (prevCoursesLicenses && prevCoursesLicenses.length) {
            setCoursesAssignedLicenses(arrayToObjectKeys(prevCoursesLicenses, 'courseAssignationId'));
        }
    }, [prevCoursesLicenses]);

    // send values to parent
    useEffect(() => {
        onChange(coursesAssignedLicenses);

        // eslint-disable-next-line
    }, [coursesAssignedLicenses]);

    // get licenses
    const getLicenses = courseAssignationId => {
        return (coursesAssignedLicenses[courseAssignationId] && coursesAssignedLicenses[courseAssignationId].licenses) || '0';
    };

    // set licenses
    const setLicenses = (licenses, courseAssignedParam) => {
        const { id: courseAssignationId, corporateEntityId: ceId, courseId, courseName } = courseAssignedParam;

        const hasCourseAssigned = coursesAssignedLicenses[courseAssignationId];

        // eslint-disable-next-line
        let updated = { ...coursesAssignedLicenses };

        if (hasCourseAssigned) {
            updated[courseAssignationId].licenses = licenses ? parseInt(licenses, 10) : 0;
            updated[courseAssignationId].courseName = courseName;
        } else {
            updated[courseAssignationId] = {
                licenses: licenses ? parseInt(licenses, 10) : 0,
                courseAssignationId,
                corporateEntityId: ceId,
                courseId,
                courseName,
            };
        }

        setCoursesAssignedLicenses(updated);
    };

    // event: on change licenses values from input
    const handleOnChangeLicenses = (e, courseAssigned) => {
        setLicenses(e.target.value, courseAssigned);
    };

    // input elements
    const renderCoursesInputs = () => {
        if (coursesAssignedOptions && coursesAssignedOptions.length) {
            return coursesAssignedOptions.map((item, index) => {
                const key = `courses-licenses-${index}`;

                const courseOptions = [item];
                const { value: courseAssignationId, raw: courseAssigned } = item;
                const { licenses, usedLicenses } = courseAssigned;

                const available = licenses - usedLicenses;
                const availableLicenses = `${licenses} / ${usedLicenses} / ${available}`;

                return (
                    <div key={key} className="d-flex flex-column flex-md-row">
                        {/* course name */}
                        <Col className="col-md-4 pl-0 pr-0 pr-md-3">
                            <Select label="Nombre del curso" value={courseAssignationId} options={courseOptions} placeholder="" />
                        </Col>

                        {/* course name */}
                        <Col className="col-md-4 pl-0 pr-0 pr-md-3">
                            <Input label="Reg./En Uso/Disp." value={availableLicenses} disabled />
                        </Col>

                        {/* course name */}
                        <Col className="col-md-4 pl-0 pr-0 pr-md-3">
                            <Input
                                label="Licencias"
                                value={getLicenses(courseAssignationId)}
                                required
                                onChange={e => handleOnChangeLicenses(e, courseAssigned)}
                            />
                        </Col>
                    </div>
                );
            });
        }

        return undefined;
    };

    return <div className={className}>{renderCoursesInputs()}</div>;
};

CoursesAssignedSelectable.propTypes = {
    corporateEntityId: PropTypes.string,
    prevCoursesLicenses: PropTypes.array,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

CoursesAssignedSelectable.defaultProps = {
    corporateEntityId: undefined,
    prevCoursesLicenses: [],
    onChange: () => {},
    className: undefined,
};

export default CoursesAssignedSelectable;
