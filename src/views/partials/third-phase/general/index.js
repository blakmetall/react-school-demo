import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import GeneralLicensesCardList from './cards-list';

const LicensesGeneralPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <GeneralLicensesCardList />
            </PageContainer>
        </div>
    );
};

export default LicensesGeneralPage;
