import React from 'react';
import PropTypes from 'prop-types';
import { PageContainer, PageHeading } from '../../../../components';
import ClassesList from './classes-list';

const CourseRecordedClassesPageParticipant = ({ recordedClasses }) => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Clases grabadas" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <ClassesList recordedClasses={recordedClasses} />
            </PageContainer>
        </div>
    );
};

CourseRecordedClassesPageParticipant.propTypes = {
    recordedClasses: PropTypes.array,
};

CourseRecordedClassesPageParticipant.defaultProps = {
    recordedClasses: [],
};

export default CourseRecordedClassesPageParticipant;
