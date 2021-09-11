import React from 'react';
import { PageHeading } from '../../../../../../components';
import ExamFinalizedVisualizer from './exam-finalized-form';

const ExamFinalizedPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Examen" />
            <ExamFinalizedVisualizer />
        </div>
    );
};

export default ExamFinalizedPage;
