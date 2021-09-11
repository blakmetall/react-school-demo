import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteFacilitatorsGroupsItem } from '../../../store/actions/facilitators-groups';
import { facilitatorsGroupsSort } from '../../../helpers/sort';
import FacilitatorsGroupsForm from './form';
import LicenseAvailabilityTd from './licenseAvailabilityTd';

const AdminFacilitatorsGroupsPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '230px',
        },
        {
            label: 'Entidad Regional',
            field: 'regionalEntityName',
            colWidth: '210px',
        },
        {
            label: 'Comunidad de Aprendizaje',
            field: 'learningCommunityName',
            colWidth: '210px',
        },
        {
            label: 'Facilitador',
            field: 'facilitatorName',
            colWidth: '170px',
        },
        {
            label: 'Grupo',
            field: 'groupName',
            colWidth: '130px',
        },
        {
            label: 'Lic. Usadas/Disponibles',
            field: 'licensesStatus',
            colWidth: '180px',
            type: 'render',
            typeSettings: {
                component: LicenseAvailabilityTd,
            },
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'facilitatorsGroups',
            },
            mapFields: {
                id: 'id',
                corporateEntityName: 'corporateEntityName',
                regionalEntityName: 'regionalEntityName',
                learningCommunityName: 'learningCommunityName',
                facilitatorName: 'facilitatorName',
                groupName: 'groupName',
                corporateEntityId: 'licensesStatus',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: FacilitatorsGroupsForm,
                deleteAction: deleteFacilitatorsGroupsItem,
                sortPipe: facilitatorsGroupsSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Asignaciones" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar" icon="add" isOpenByDefault={false} className="mb-5">
                    <FacilitatorsGroupsForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminFacilitatorsGroupsPage;
