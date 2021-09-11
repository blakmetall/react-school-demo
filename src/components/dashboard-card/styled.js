import styled from 'styled-components';
import { Card, ProgressBar } from 'react-bootstrap';
import theme from '../../theme';

const StyledCard = styled(Card)`
    background-color: transparent !important;
    border: 0 !important;

    .card-body {
        padding: 25px 20px;
        border-radius: 10px;
        overflow: hidden;

        ${props =>
            props.variant &&
            props.variant === 'light' &&
            `
            background: #fff;
            border: 1px solid #f0f0f0;
        `}

        ${props =>
            props.variant &&
            props.variant === 'brown' &&
            `
            background: ${theme.bootstrap.appBrown};
        `}
    }
`;

const StyledIconWrapper = styled.div`
    svg {
        ${props =>
            props.variant &&
            props.variant === 'light' &&
            `
            color: #a1a1a1 !important; 
        `}

        ${props =>
            props.variant &&
            props.variant === 'brown' &&
            `
            color: #333 !important;
        `}
    }
`;

const StyledLabel = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;

    ${props =>
        props.variant &&
        props.variant === 'light' &&
        `
        color: #a1a1a1;
    `}

    ${props =>
        props.variant &&
        props.variant === 'brown' &&
        `
        color: white;
    `}
`;

const StyledProgressBar = styled(ProgressBar)`
    .progress-bar {
        ${props =>
            props.variant &&
            props.variant === 'light' &&
            `
        background-color: ${theme.bootstrap.appBlue3} !important;
    `}

        ${props =>
            props.variant &&
            props.variant === 'brown' &&
            `
        background-color: #333 !important;
    `}
    }
`;

const StyledValue = styled.div`
    font-size: 22px;
    font-weight: bold;

    ${props =>
        props.variant &&
        props.variant === 'light' &&
        `
        color: ${theme.bootstrap.appBlue3};
    `}

    ${props =>
        props.variant &&
        props.variant === 'brown' &&
        `
        color: #333;
    `}
`;

export { StyledCard, StyledIconWrapper, StyledLabel, StyledProgressBar, StyledValue };
