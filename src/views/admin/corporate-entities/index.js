import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteCorporateEntity } from '../../../store/actions/corporate-entities';
import { corporateEntitiesSort } from '../../../helpers/sort';
import CorporateEntitiesForm from './form';

const AdminCorporateEntitiesPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '250px',
        },
        {
            label: 'País',
            field: 'corporateEntityCountryName',
            colWidth: '180px',
        },
        {
            label: 'idSAP',
            field: 'corporateEntityIdSAP',
            colWidth: '110px',
        },
        {
            label: 'Encargado',
            field: 'corporateEntityManagerName',
            colWidth: '210px',
        },
        {
            label: 'Correo',
            field: 'corporateEntityManagerEmail',
            colWidth: '280px',
        },
        {
            label: 'Logo',
            field: 'corporateEntityLogo',
            colWidth: '65px',
            type: 'preview-image',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'corporateEntities',
            },
            mapFields: {
                id: 'id',
                countryName: 'corporateEntityCountryName',
                name: 'corporateEntityName',
                idSAP: 'corporateEntityIdSAP',
                managerName: 'corporateEntityManagerName',
                managerEmail: 'corporateEntityManagerEmail',
                logo: 'corporateEntityLogo',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: CorporateEntitiesForm,
                deleteAction: deleteCorporateEntity,
                sortPipe: corporateEntitiesSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Entidad Corporativa" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar Entidad Corporativa" icon="add" isOpenByDefault={false} className="mb-5">
                    <CorporateEntitiesForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminCorporateEntitiesPage;
