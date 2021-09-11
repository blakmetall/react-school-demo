import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteFacilitatorsItem } from '../../../store/actions/facilitators';
import { managersSort, facilitatorsSort } from '../../../helpers/sort';
import FacilitatorsForm from './form';

const AdminFacilitatorsPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '240px',
        },
        {
            label: 'Entidad Regional',
            field: 'regionalEntityName',
            colWidth: '200px',
        },
        {
            label: 'Comunidad de Aprendizaje',
            field: 'learningCommunityName',
            colWidth: '200px',
        },
        {
            label: 'Facilitador',
            field: 'facilitatorName',
            colWidth: '200px',
        },
        {
            label: 'Correo',
            field: 'facilitatorEmail',
            colWidth: '250px',
        },
        {
            label: 'CVC',
            field: 'facilitatorConferenceAccount',
            colWidth: '200px',
        },
        {
            label: 'Contraseña',
            field: 'facilitatorConferencePassword',
            colWidth: '180px',
        },
        {
            label: 'Status',
            field: 'facilitatorStatusName',
            colWidth: '130px',
        },
        {
            label: 'Fecha de cancelación',
            field: 'facilitatorConferenceCancelDate',
            colWidth: '150px',
            type: 'date',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'facilitators',
                dropdown: {
                    triggerField: 'learningCommunityName',
                    relationField: 'managersIds',
                    relationFieldType: 'array',
                },
            },
            mapFields: {
                id: 'id',
                corporateEntityName: 'corporateEntityName',
                regionalEntityName: 'regionalEntityName',
                learningCommunityName: 'learningCommunityName',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: FacilitatorsForm,
                deleteAction: deleteFacilitatorsItem,
                sortPipe: facilitatorsSort,
            },
        },
        {
            firebase: {
                collection: 'facilitatorsManagers',
            },
            mapFields: {
                id: 'id',
                name: 'facilitatorName',
                email: 'facilitatorEmail',
                conferenceAccount: 'facilitatorConferenceAccount',
                conferencePassword: 'facilitatorConferencePassword',
                conferenceCancelDate: 'facilitatorConferenceCancelDate',
                statusName: 'facilitatorStatusName',
            },
            settings: {
                sortPipe: managersSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Facilitadores" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar" icon="add" isOpenByDefault={false} className="mb-5">
                    <FacilitatorsForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminFacilitatorsPage;
