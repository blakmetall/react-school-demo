import React from 'react';
import { PageContainer, PageHeading, Dropdown } from '../../../../../components';
import ClassesList from './classes-list';
import AddNewClassForm from './form';

const CourseRecordedClassesPageFaciliator = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Clases grabadas" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar clases grabadas" icon="add" className="mb-4">
                    <AddNewClassForm />
                </Dropdown>
                <ClassesList />
            </PageContainer>
        </div>
    );
};

export default CourseRecordedClassesPageFaciliator;
