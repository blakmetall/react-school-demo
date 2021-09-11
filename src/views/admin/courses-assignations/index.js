import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteCourseAssignation } from '../../../store/actions/courses-assignations';
import { coursesAssignationsSort } from '../../../helpers/sort';
import CoursesAssignationsForm from './form';
import LicenseAvailabilityTd from './licenseAvailabilityTd';

const AdminCoursesPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '250px',
        },
        {
            label: 'Curso',
            field: 'courseName',
            colWidth: '250px',
        },
        {
            label: 'Licencias',
            field: 'assignationLicences',
            colWidth: '100px',
            type: 'render',
            typeSettings: {
                component: LicenseAvailabilityTd,
            },
        },
        {
            label: 'Fecha de vencimiento',
            field: 'assignationDueDate',
            colWidth: '100px',
            type: 'date',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'coursesAssignations',
            },
            mapFields: {
                id: 'id',
                corporateEntityName: 'corporateEntityName',
                courseName: 'courseName',
                licenses: 'assignationLicences',
                dueDate: 'assignationDueDate',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: CoursesAssignationsForm,
                deleteAction: deleteCourseAssignation,
                sortPipe: coursesAssignationsSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Asignaciones de cursos" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar" icon="add" isOpenByDefault className="mb-5">
                    <CoursesAssignationsForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminCoursesPage;
