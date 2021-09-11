import React from 'react';
import { PageHeading } from '../../../../../components';
import ExamAvailableForm from './exam-available-form';

const CourseExamAvailablePage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Examen" />
            <ExamAvailableForm />
        </div>
    );
};

export default CourseExamAvailablePage;
