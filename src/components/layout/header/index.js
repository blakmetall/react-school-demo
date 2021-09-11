import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';
import { useViewport } from '../../../hooks';

const Header = ({ onHeightUpdate }) => {
    const containerRef = useRef();
    const viewport = useViewport();

    useEffect(() => {
        onHeightUpdate(containerRef.current.clientHeight);

        // eslint-disable-next-line
    }, [containerRef, viewport]);

    return (
        <StyledContainer ref={containerRef}>
            <DesktopMenu />
            <MobileMenu />
        </StyledContainer>
    );
};

Header.propTypes = {
    onHeightUpdate: PropTypes.func,
};

Header.defaultProps = {
    onHeightUpdate: () => {},
};

export default Header;
