import React from 'react';
import { PageContainer, PageHeading, Dropdown } from '../../../../../../components';
import theme from '../../../../../../theme';
import FeedbackAndRating from './FeedbackAndRating';
import HeaderTaskVisualizer from './header-task-visualizer';

const FacilitatorTutoringTask = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading />
            {/* header form */}
            <div className="bg-white pb-4 px-6">
                <HeaderTaskVisualizer />
            </div>
            <PageContainer contentPaddingClass="py-4 px-5">
                {/* dropdown-form - feedback and rating */}
                <Dropdown title="Retroalimentación y calificación" icon="add" color={theme.bootstrap.info}>
                    <FeedbackAndRating />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default FacilitatorTutoringTask;
