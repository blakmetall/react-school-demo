import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteRegionalEntity } from '../../../store/actions/regional-entities';
import { managersSort, regionalEntitiesSort } from '../../../helpers/sort';
import RegionalEntitiesForm from './form';

const AdminRegionalEntitiesPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '200px',
        },
        {
            label: 'Entidad Regional',
            field: 'regionalEntityName',
            colWidth: '200px',
        },
        {
            label: 'Encargado',
            field: 'regionalEntityManagerName',
            colWidth: '200px',
        },
        {
            label: 'Email',
            field: 'regionalEntityManagerEmail',
            colWidth: '250px',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'regionalEntities',
                dropdown: {
                    triggerField: 'regionalEntityName',
                    relationField: 'managersIds',
                    relationFieldType: 'array',
                },
            },
            mapFields: {
                id: 'id',
                corporateEntityName: 'corporateEntityName',
                name: 'regionalEntityName',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: RegionalEntitiesForm,
                deleteAction: deleteRegionalEntity,
                sortPipe: regionalEntitiesSort,
            },
        },
        {
            firebase: {
                collection: 'managers',
            },
            mapFields: {
                id: 'id',
                name: 'regionalEntityManagerName',
                email: 'regionalEntityManagerEmail',
            },
            settings: {
                sortPipe: managersSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Entidades regionales" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar entidad regional" icon="add" isOpenByDefault={false} className="mb-5">
                    <RegionalEntitiesForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminRegionalEntitiesPage;
