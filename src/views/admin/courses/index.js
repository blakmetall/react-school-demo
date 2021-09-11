import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteCourse } from '../../../store/actions/courses';
import { booksSort, coursesSort } from '../../../helpers/sort';
import CoursesForm from './form';

const AdminCoursesPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Nombre del curso',
            field: 'courseName',
            colWidth: '280px',
        },
        {
            label: 'Categoría',
            field: 'categoryName',
            colWidth: '170px',
        },
        {
            label: 'Cal. mínima',
            field: 'courseMinQualification',
            colWidth: '110px',
        },
        {
            label: 'ID (SAP)',
            field: 'bookIdSAP',
            colWidth: '100px',
        },
        {
            label: 'Libro',
            field: 'bookName',
            colWidth: '200px',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'courses',
                dropdown: {
                    triggerField: 'courseName',
                    relationField: 'booksIds',
                    relationFieldType: 'array',
                },
            },
            mapFields: {
                id: 'id',
                name: 'courseName',
                minQualification: 'courseMinQualification',
                categoryName: 'categoryName',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: CoursesForm,
                deleteAction: deleteCourse,
                sortPipe: coursesSort,
            },
        },
        {
            firebase: {
                collection: 'books',
            },
            mapFields: {
                id: 'id',
                name: 'bookName',
                idSAP: 'bookIdSAP',
            },
            settings: {
                sortPipe: booksSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Cursos" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar Curso" icon="add" isOpenByDefault={false} className="mb-5">
                    <CoursesForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminCoursesPage;
