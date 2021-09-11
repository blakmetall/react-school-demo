import styled from 'styled-components';

const StyledLogo = styled.img`
    width: 100%;
    max-width: 195px;

    ${props =>
        !props.isMenuOpen &&
        `
        width: 35px;
    `}
`;

const StyledLogoContainer = styled.div`
    border: 2px solid #c9c9c9;
    border-top: 0;
    padding-bottom: 40px;
    border-radius: 12px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    ${props =>
        !props.isMenuOpen &&
        `
        padding-left: 8px;
        padding-right: 8px;
    `}
`;

const StyledMenuItemsWrapper = styled.div`
    height: calc(100vh - 210px);
`;

export { StyledLogo, StyledLogoContainer, StyledMenuItemsWrapper };
