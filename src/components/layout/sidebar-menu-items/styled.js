import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const StyledCorporateEntityLogo = styled(Image)`
    width: 100%;
    height: auto;
    max-width: 130px;
    transition: all 0.2s ease;
`;

const StyledSubMenuLink = styled(NavLink)`
    background-color: white;
    transition: all 0.2s ease;
    transition: background-color 0.2s linear;
    border: 1px solid transparent;
    font-size: 13px;
    padding: 14px 20px;

    & {
        color: black !important;
        text-decoration: none !important;
    }

    &:hover {
        border: 1px solid #e8e8e8 !important;
        text-decoration: none !important;
    }

    ${props =>
        props.active &&
        `
        background-color: transparent;
    `}
`;

const StyledSubMenuIcon = styled.img`
    height: 15px;
    width: auto;
    padding-right: 0.75rem;
    transition: all 0.2s ease;
`;

export { StyledCorporateEntityLogo, StyledSubMenuLink, StyledSubMenuIcon };
