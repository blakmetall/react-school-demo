import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { StyledLogo, StyledLogoContainer, StyledMenuItemsWrapper } from './styled';
import { Divider, RenderIf } from '../..';
import SidebarMenuItems from '../sidebar-menu-items';

const Sidebar = ({ isMenuOpen, urlParams }) => {
    const getLogoSrc = () => {
        return isMenuOpen ? '/img/School Demo-logo.svg' : '/img/School Demo-logo-short.svg';
    };

    return (
        <div>
            {/* logo */}
            <StyledLogoContainer className="text-center" isMenuOpen={isMenuOpen}>
                <Divider size="sm" />
                <StyledLogo src={getLogoSrc()} alt="" isMenuOpen={isMenuOpen} />
            </StyledLogoContainer>

            <RenderIf isTrue={isMenuOpen}>
                <div className="pt-2" />
                <div className="px-2">
                    <StyledMenuItemsWrapper>
                        <PerfectScrollbar>
                            <SidebarMenuItems urlParams={urlParams} />
                        </PerfectScrollbar>
                    </StyledMenuItemsWrapper>
                </div>
            </RenderIf>
        </div>
    );
};

Sidebar.propTypes = {
    isMenuOpen: PropTypes.bool,
    urlParams: PropTypes.any,
};

Sidebar.defaultProps = {
    isMenuOpen: undefined,
    urlParams: undefined,
};

export default Sidebar;
