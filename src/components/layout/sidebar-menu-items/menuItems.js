import React from 'react';
import PropTypes from 'prop-types';
import SubMenuLink from './subMenuLink';

function MenuItems({ menu, isMobile }) {
    const isMenuLoaded = menu && menu.length;

    if (isMenuLoaded) {
        const activeMenu = menu.find(menuItem => menuItem.isActive);
        const subMenu = activeMenu.children;
        const hasSubMenu = !!subMenu;

        if (hasSubMenu) {
            return subMenu.map((menuItem, index) => {
                const key = `submenu-${index}`;

                return <SubMenuLink key={key} menuItem={menuItem} isMobile={isMobile} />;
            });
        }
    }

    return <></>;
}

MenuItems.propTypes = {
    menu: PropTypes.any,
    isMobile: PropTypes.bool,
};

MenuItems.defaultProps = {
    menu: undefined,
    isMobile: undefined,
};

export default MenuItems;
