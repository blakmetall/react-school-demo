import React from 'react';
import { PageContainer, PageHeading } from '../../../../../components';
import ClassesList from './classes-list';

const CourseRecordedClassesPagePArticipant = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Clases grabadas" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <ClassesList />
            </PageContainer>
        </div>
    );
};

export default CourseRecordedClassesPagePArticipant;
