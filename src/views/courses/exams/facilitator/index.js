import React from 'react';
import { Dropdown, PageContainer, PageHeading } from '../../../../components';
import ExamsFacilitatorForm from './form';
import ExamsList from './list';

const ExamsFacilitatorPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Exámenes" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar clase" icon="add" className="mb-5">
                    <ExamsFacilitatorForm />
                </Dropdown>

                <ExamsList />
                <ExamsList />
                <ExamsList />
            </PageContainer>
        </div>
    );
};

export default ExamsFacilitatorPage;
