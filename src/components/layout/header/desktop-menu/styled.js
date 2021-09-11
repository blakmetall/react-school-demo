import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../../theme';

const StyledContainer = styled.div`
    @media (max-width: ${theme.bootstrap.menuBreakPointPx}) {
        display: none;
    }
`;

const StyledMenuTabIcon = styled.img`
    height: 15px;
    width: auto;
    padding-right: 0.75rem;
`;

const StyledMenuTabLink = styled(Link)`
    text-transform: capitalize;
    font-size: 13px;
    color: white;
    margin-right: 2px;
    border: 1px solid transparent;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 0;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 13px;
    text-decoration: none;

    &:focus,
    &:active {
        color: white;
        text-decoration: none;
    }

    &:hover {
        background: white;
        color: ${theme.bootstrap.appGray5};
        text-decoration: none;
    }

    ${props =>
        props.enabled &&
        `
        background: white;  
        color: ${theme.bootstrap.appGray5};

        &:focus,
        &:active {
            color: ${theme.bootstrap.appGray5};
            text-decoration: none;
        }
    `}
`;

const StyledMenuTabs = styled.div`
    width: 100%;
    height: 80%;
`;

const StyledMenuTrigger = styled.a`
    width: 67px;
`;

export { StyledContainer, StyledMenuTabIcon, StyledMenuTabLink, StyledMenuTabs, StyledMenuTrigger };
