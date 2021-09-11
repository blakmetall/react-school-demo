import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { RenderIf } from '../../..';
import { setActiveMenuSession } from '../../../../store/actions/session';
import { StyledMenuTabIcon, StyledMenuTabLink } from './styled';

const MenuTabLink = ({ menu, menuItem, index }) => {
    const [isHover, setIsHover] = useState(false);

    const { name, url, icon, isActive } = menuItem;
    const hasIcon = !!icon;

    const dispatch = useDispatch();

    const getIconSrc = () => {
        return isActive || isHover ? `/img/icons/general/${icon}-brown.svg` : `/img/icons/general/${icon}.svg`;
    };

    return (
        <StyledMenuTabLink
            to={url}
            onClick={() => dispatch(setActiveMenuSession(index))}
            enabled={isActive ? 1 : 0}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="d-flex align-items-center">
                <RenderIf isTrue={hasIcon}>
                    <StyledMenuTabIcon src={getIconSrc()} alt="" />
                </RenderIf>
                <div>{name}</div>
            </div>
        </StyledMenuTabLink>
    );
};

MenuTabLink.propTypes = {
    menu: PropTypes.any,
    menuItem: PropTypes.any,
    index: PropTypes.number,
};

MenuTabLink.defaultProps = {
    menu: undefined,
    menuItem: undefined,
    index: undefined,
};

const mapStateToProps = ({ auth }) => ({
    menu: auth.menu,
});

const enhance = compose(connect(mapStateToProps));

export default enhance(MenuTabLink);
