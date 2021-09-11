import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../../theme';

const StyledLogo = styled.img`
    width: 100%;
    max-width: 130px;
`;

const StyledContainer = styled.div`
    padding: 0.5rem;
    height: 65px;
`;

const StyledMainContainer = styled.div`
    @media (min-width: ${theme.bootstrap.menuBreakPointPx}) {
        display: none;
    }
`;

const StyledMenuArrow = styled.div`
    background: white;
    padding: 4px 10px 5px 10px;
    border-radius: 10px;

    ${props =>
        props.isLeftArrow &&
        `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `}

    ${props =>
        props.isRightArrow &&
        `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 1px solid #c6c6c6;
    `}
`;

const StyledMenuArrows = styled.div`
    padding-bottom: 10px;
`;

const StyledMenuArrowLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:visited,
    &:focus,
    &:active {
        color: white;
        text-decoration: none;
    }
`;

const StyledMenuArrowImg = styled.img`
    width: 8px;

    ${props =>
        props.isRightArrow &&
        `
        transform: scaleX(-1);
    `}
`;

const StyledMenuItem = styled(Link)`
    color: white;
    display: inline-block;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 8px;
    border-bottom: 3px solid #fff;

    &:active,
    &:focus,
    &:hover {
        color: white;
        text-decoration: none;
    }
`;

const StyledMenuItems = styled.div``;

const StyledMenuMobileIcon = styled.img`
    height: 15px;
    width: auto;
    padding-right: 0.75rem;
`;

export {
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
};
