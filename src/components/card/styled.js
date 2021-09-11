import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import theme from '../../theme';

export const StyledCardWrapper = styled(Card)`
    padding: 1.5rem;
    background-color: ${theme.bootstrap.appBlue3};

    ${props =>
        props.textcolor &&
        `
        color: ${props.textcolor};
    `}

    ${props =>
        props.maxwidth &&
        `
        max-width: ${props.maxwidth} !important;
    `}

    ${props =>
        props.backgroundcolor &&
        `
        background-color: ${props.backgroundcolor} !important;
    `}

    ${props =>
        props.paddingsize &&
        `
        ${props.paddingsize === 'xs' &&
            `
            padding: 0.25rem !important;
        `}

        ${props.paddingsize === 'sm' &&
            `
            padding: 0.25rem !important;
        `}

        ${props.paddingsize === 'md' &&
            `
            padding: 0.25rem !important;
        `}

        ${props.paddingsize === 'lg' &&
            `
            padding: 0.25rem !important;
        `}

        ${props.paddingsize === 'xl' &&
            `
            padding: 0.25rem !important;
        `}
    `}
`;
