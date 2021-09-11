import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import BreackdownTable from './brackdown-table';
import Header from './header';

const BreackdownTemplatePage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading />

            <PageContainer contentPaddingClass="pb-4">
                {/* header form */}
                <div className="bg-white pb-4 px-2">
                    <Header />
                </div>

                {/* charts */}
                <div className="bg-white m-5 my-4 p-3 p-lg-5 rounded-15">
                    <BreackdownTable />
                </div>
            </PageContainer>
        </div>
    );
};

export default BreackdownTemplatePage;
