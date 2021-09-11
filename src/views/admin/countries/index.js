import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteCountry } from '../../../store/actions/countries';
import { countriesSort } from '../../../helpers/sort';
import CountriesForm from './form';

const AdminCountriesPage = () => {
    const tableColumnsSettings = [
        {
            label: 'País',
            field: 'countryName',
            colWidth: '220px',
        },
        {
            label: 'Encargado',
            field: 'countryManagerName',
            colWidth: '210px',
        },
        {
            label: 'Correo',
            field: 'countryManagerEmail',
            colWidth: '280px',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'countries',
            },
            mapFields: {
                id: 'id',
                name: 'countryName',
                managerName: 'countryManagerName',
                managerEmail: 'countryManagerEmail',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: CountriesForm,
                deleteAction: deleteCountry,
                sortPipe: countriesSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Países" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar País" icon="add" isOpenByDefault={false} className="mb-5">
                    <CountriesForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminCountriesPage;
