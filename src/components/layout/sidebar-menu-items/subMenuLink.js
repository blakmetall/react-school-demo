import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RenderIf from '../../render-if';
import { StyledSubMenuLink, StyledSubMenuIcon } from './styled';
import { uiTypes } from '../../../store/types';

const SubMenuLink = ({ menuItem, isMobile }) => {
    const { name, url, icon } = menuItem;

    const hasIcon = !!icon;
    const iconSrc = `/img/icons/${icon}-brown.svg`;

    const menuOptionAlignment = isMobile ? 'justify-content-end' : 'justify-content-start';

    const isActive = url === window.location.pathname;

    const dispatch = useDispatch();

    const onMobileSubmenuClick = () => {
        if (isMobile) {
            dispatch({
                type: uiTypes.SET_MOBILE_MENU_OPEN_STATUS,
                payload: false,
            });
        }
    };

    return (
        <StyledSubMenuLink
            to={url}
            active={isActive ? 1 : 0}
            className="rounder px-4 mb-2"
            onClick={() => onMobileSubmenuClick()}
        >
            <div className={`d-flex align-items-center ${menuOptionAlignment}`}>
                <RenderIf isTrue={hasIcon}>
                    <StyledSubMenuIcon src={iconSrc} alt="" />
                </RenderIf>
                <div>{name}</div>
            </div>
        </StyledSubMenuLink>
    );
};

SubMenuLink.propTypes = {
    menuItem: PropTypes.any,
    isMobile: PropTypes.bool,
};

SubMenuLink.defaultProps = {
    menuItem: undefined,
    isMobile: undefined,
};

export default SubMenuLink;
