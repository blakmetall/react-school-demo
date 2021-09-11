import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import DoughnutChart from './chart';
import Header from './header';

const ChartsTemplatePage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading />

            <PageContainer contentPaddingClass="pb-4">
                {/* header form */}
                <div className="bg-white pb-4 px-2">
                    <Header />
                </div>
                {/* charts */}
                <DoughnutChart />
            </PageContainer>
        </div>
    );
};

export default ChartsTemplatePage;
