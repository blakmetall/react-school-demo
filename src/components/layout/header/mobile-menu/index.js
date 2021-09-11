import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { setActiveMenuSession } from '../../../../store/actions/session';
import { RenderIf } from '../../..';
import MenuDropdowns from '../menu-dropdowns';
import {
    StyledContainer,
    StyledLogo,
    StyledMainContainer,
    StyledMenuArrow,
    StyledMenuArrows,
    StyledMenuArrowLink,
    StyledMenuArrowImg,
    StyledMenuItem,
    StyledMenuItems,
    StyledMenuMobileIcon,
} from './styled';

const MobileMenu = ({ menu }) => {
    const [mobileMenu, setMobileMenu] = useState();
    const hasMenu = !!mobileMenu;

    const dispatch = useDispatch();

    useEffect(() => {
        setMobileMenu(menu);
    }, [menu]);

    const getActiveMenuIndex = () => {
        if (hasMenu) {
            return mobileMenu.findIndex(v => v.isActive);
        }

        return undefined;
    };

    const updateMenuActiveIndex = index => {
        dispatch(setActiveMenuSession(index));
    };

    const menuMoveLeft = () => {
        const currentIndex = getActiveMenuIndex();
        const prevIndex = currentIndex - 1;

        if (prevIndex < 0) {
            updateMenuActiveIndex(mobileMenu.length - 1);
        } else {
            updateMenuActiveIndex(prevIndex);
        }
    };

    const menuMoveRight = () => {
        const currentIndex = getActiveMenuIndex();
        const nextIndex = currentIndex + 1;

        if (nextIndex >= mobileMenu.length) {
            updateMenuActiveIndex(0);
        } else {
            updateMenuActiveIndex(nextIndex);
        }
    };

    const getPrevMenuOptionUrl = () => {
        const currentIndex = getActiveMenuIndex();
        const prevIndex = currentIndex - 1;

        if (hasMenu) {
            if (prevIndex < 0) {
                return mobileMenu[mobileMenu.length - 1].url;
            }

            return mobileMenu[prevIndex].url;
        }

        return '/';
    };

    const getNextMenuOptionUrl = () => {
        const currentIndex = getActiveMenuIndex();
        const nextIndex = currentIndex + 1;

        if (hasMenu) {
            if (nextIndex >= mobileMenu.length) {
                return mobileMenu[0].url;
            }

            return mobileMenu[nextIndex].url;
        }

        return '/';
    };

    const renderMenuItems = () => {
        if (hasMenu) {
            return mobileMenu.map((menuItem, index) => {
                const { name, url, icon, isActive } = menuItem;

                const key = `mobile-menu-${index}`;
                const hasIcon = !!icon;
                const iconSrc = `/img/icons/${icon}.svg`;

                if (isActive) {
                    return (
                        <StyledMenuItem key={key} to={url}>
                            <div className="d-flex align-items-center">
                                <RenderIf isTrue={hasIcon}>
                                    <StyledMenuMobileIcon src={iconSrc} alt="" />
                                </RenderIf>
                                <div>{name}</div>
                            </div>
                        </StyledMenuItem>
                    );
                }

                return undefined;
            });
        }

        return undefined;
    };

    return (
        <StyledMainContainer>
            <StyledContainer>
                <div className="d-flex align-items-center justify-content-between p-1 h-100">
                    <StyledLogo src="/img/School Demo-logo-white.svg" alt="" className="mr-3" />
                    <MenuDropdowns className="d-flex justify-content-end align-items-center h-100 pr-3" isMobile />
                </div>
            </StyledContainer>
            <div className="d-flex align-items-end justify-content-between px-4 px-sm-5">
                <RenderIf isTrue={!!hasMenu}>
                    <StyledMenuItems>{renderMenuItems()}</StyledMenuItems>
                </RenderIf>

                {/* show arrows if menu have two or more options */}
                <RenderIf isTrue={hasMenu && mobileMenu.length > 1}>
                    <StyledMenuArrows className="d-flex align-items-center">
                        {/* // 'todo : Custom Size Icon */}
                        {/* left arrow */}
                        <StyledMenuArrowLink to={getPrevMenuOptionUrl()} onClick={() => menuMoveLeft()}>
                            <StyledMenuArrow isLeftArrow title="Anterior">
                                <StyledMenuArrowImg src="/img/icons/general/left-arrow-gray.svg" />
                            </StyledMenuArrow>
                        </StyledMenuArrowLink>

                        {/* right arrow */}
                        <StyledMenuArrowLink to={getNextMenuOptionUrl()} onClick={() => menuMoveRight()}>
                            <StyledMenuArrow isRightArrow title="Siguiente">
                                <StyledMenuArrowImg src="/img/icons/general/left-arrow-gray.svg" isRightArrow />
                            </StyledMenuArrow>
                        </StyledMenuArrowLink>
                    </StyledMenuArrows>
                </RenderIf>
            </div>
        </StyledMainContainer>
    );
};

const storeInjectedProps = state => ({
    menu: state.auth.menu,
});

MobileMenu.propTypes = {
    menu: PropTypes.any,
};

MobileMenu.defaultProps = {
    menu: undefined,
};

export default connect(storeInjectedProps)(MobileMenu);
