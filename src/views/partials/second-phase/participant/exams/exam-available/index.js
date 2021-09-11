import React from 'react';
import { PageHeading } from '../../../../../../components';
import ExamAvailableForm from './exam-available-form';

const ExamAvailablePage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Examen" />
            <ExamAvailableForm />
        </div>
    );
};

export default ExamAvailablePage;
