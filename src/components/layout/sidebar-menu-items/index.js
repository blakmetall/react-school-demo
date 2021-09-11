import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RenderIf from '../../render-if';
import CourseMenuItems from './courseMenuItems';
import MenuItems from './menuItems';
import { StyledCorporateEntityLogo } from './styled';

function SidebarMenuItems({ auth, isMobile, urlParams }) {
    const { corporateEntity, menu } = auth;
    const hasCorporateEntity = !!corporateEntity;
    const hasLogo = hasCorporateEntity && corporateEntity.logo;

    const getLogoUrl = () => {
        if (corporateEntity && corporateEntity.logo) {
            const { logo } = corporateEntity;

            if (logo.storageUrl) {
                return logo.storageUrl;
            }
        }

        return '';
    };

    return (
        <>
            {/* logo */}
            <RenderIf isTrue={!!hasLogo}>
                <div className="pt-3 px-3 text-center">
                    <StyledCorporateEntityLogo src={getLogoUrl()} />
                    <div className="pt-3 pb-3" />
                </div>
            </RenderIf>

            {/* sumenu items from role menu configuration */}
            <div className="d-flex flex-column">
                <MenuItems menu={menu} isMobile={isMobile} />
            </div>

            {/* menu items based on the viewing course */}
            <div className="d-flex flex-column">
                <CourseMenuItems isMobile={isMobile} urlParams={urlParams} />
            </div>
        </>
    );
}

const storeInjectedProps = state => ({
    auth: state.auth,
});

SidebarMenuItems.propTypes = {
    auth: PropTypes.any,
    isMobile: PropTypes.bool,
    urlParams: PropTypes.any,
};

SidebarMenuItems.defaultProps = {
    auth: undefined,
    isMobile: undefined,
    urlParams: undefined,
};

export default connect(storeInjectedProps)(SidebarMenuItems);
