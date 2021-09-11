import React from 'react';
import { PageContainer, PageHeading } from '../../../components';

const CourseCategoriesPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Course Categories" />
            <PageContainer contentPaddingClass="p-3">Course categories list here</PageContainer>
        </div>
    );
};

export default CourseCategoriesPage;
