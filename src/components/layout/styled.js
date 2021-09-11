import styled from 'styled-components';
import theme from '../../theme';

const StyledChildrenContainer = styled.div`
    ${props =>
        props.headerHeight &&
        `
        height: calc(100vh - ${props.headerHeight}px);
    `}
`;

const StyledContainer = styled.div`
    width: 100%;
    /* height: 100vh; */

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        height: auto;
    }
`;

const StyledMobileSidebarContainer = styled.div`
    width: 0;
    background: #f0f0f0;
    transition: all 0.3s ease;
    overflow: hidden;
    text-align: right;
    border-bottom: 1px solid #bbbbbb;
    z-index: 9;

    ${props =>
        props.headerHeight &&
        `
        height: calc(100vh - ${props.headerHeight + 9}px);
    `}

    @media (max-width: ${theme.bootstrap.menuBreakPointPx}) {
        width: 100%;
        position: absolute;
        top: 106px;

        ${props =>
            props.isMobileMenuOpen &&
            ` 
            left: 0;
        `}

        ${props =>
            !props.isMobileMenuOpen &&
            `
            width: 0;
            left: 100%;
        `};
    }
`;

const StyledSidebarContainer = styled.div`
    background: #f0f0f0;
    width: 250px;
    flex: 0 0 250px;
    transition: all 0.2s ease;

    ${props =>
        !props.isMenuOpen &&
        `
        width: 120px;
        flex: 0 0 0;
    `}

    @media (max-width: ${theme.bootstrap.menuBreakPointPx}) {
        width: 0;
        flex: 0 0 0;
    }
`;

export { StyledChildrenContainer, StyledContainer, StyledMobileSidebarContainer, StyledSidebarContainer };
