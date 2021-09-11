import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SidebarMenuItems from '../sidebar-menu-items';
import { StyledMenuItemsWrapper } from './styled';

const MobileSidebar = ({ urlParams }) => {
    return (
        <div className="px-3 pt-3">
            <StyledMenuItemsWrapper>
                <PerfectScrollbar>
                    <SidebarMenuItems isMobile urlParams={urlParams} />
                </PerfectScrollbar>
            </StyledMenuItemsWrapper>
        </div>
    );
};

MobileSidebar.propTypes = {
    urlParams: PropTypes.any,
};

MobileSidebar.defaultProps = {
    urlParams: undefined,
};

export default MobileSidebar;
