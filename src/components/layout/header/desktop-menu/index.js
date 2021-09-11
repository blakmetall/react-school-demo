import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MenuDropdowns from '../menu-dropdowns';
import MenuTabLink from './menuTabLink';
import { StyledContainer, StyledMenuTabs, StyledMenuTrigger } from './styled';
import { MenuIcon } from '../../../icons';
import { setMenuOpenStatus } from '../../../../store/actions/ui';
import { setMenuSessionBy } from '../../../../store/actions/session';

const DesktopMenu = ({ auth, isMenuOpen }) => {
    const [isUpdatingMenu, setIsUpdatingMenu] = useState(false);
    const { menu, role } = auth;
    const dispatch = useDispatch();
    const { courseId } = useParams(false);

    useEffect(() => {
        setIsUpdatingMenu(false);
    }, [isMenuOpen]);

    useEffect(() => {
        if (role && role.slug) {
            dispatch(setMenuSessionBy({ roleSlug: role.slug, courseId }));
        }

        // eslint-disable-next-line
    }, [role, courseId]);

    const toggleMenu = () => {
        if (!isUpdatingMenu) {
            setIsUpdatingMenu(true);

            const newMenuOpenStatus = !isMenuOpen;

            dispatch(setMenuOpenStatus(newMenuOpenStatus));
        }
    };

    const renderMenuTabs = () => {
        const isMenuLoaded = menu && menu.length;

        if (isMenuLoaded) {
            return menu.map((menuItem, index) => {
                const key = `menu-${index}`;

                return <MenuTabLink key={key} menuItem={menuItem} index={index} />;
            });
        }

        return undefined;
    };

    return (
        <StyledContainer className="h-100">
            {/* menu trigger and tabs */}
            <div className="d-flex align-items-end justify-content-between h-100">
                <div className="d-flex justify-content-start align-items-end h-100">
                    <StyledMenuTrigger
                        className="d-flex justify-content-center align-items-center mr-1 h-100"
                        onClick={toggleMenu}
                    >
                        <MenuIcon size="sm" />
                    </StyledMenuTrigger>

                    <StyledMenuTabs className="d-flex">{renderMenuTabs()}</StyledMenuTabs>
                </div>

                <MenuDropdowns className="d-flex justify-content-end align-items-center h-100 pr-3" />
            </div>
        </StyledContainer>
    );
};

const storeInjectedProps = state => ({
    auth: state.auth,
    isMenuOpen: state.ui.isMenuOpen,
});

DesktopMenu.propTypes = {
    auth: PropTypes.any,
    isMenuOpen: PropTypes.bool,
};

DesktopMenu.defaultProps = {
    auth: undefined,
    isMenuOpen: true,
};

export default connect(storeInjectedProps)(DesktopMenu);
