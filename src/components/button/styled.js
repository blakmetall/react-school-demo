import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
    ${props =>
        props.fullwidth &&
        `
            width: 100%;
    `}

    /* font sizes */
    ${props => `font-size: ${props.size === 'xs' && '16px'} !important;`}
    ${props => `font-size: ${props.size === 'sm' && '19px'} !important;`}
    ${props => `font-size: ${props.size === 'md' && '22px'} !important;`}
    ${props => `font-size: ${props.size === 'lg' && '24px'} !important;`}
    ${props => `font-size: ${props.size === 'xl' && '27px'} !important;`}

    /* border radius */
    ${props => `border-radius: ${props.size === 'xs' && '11px'} !important;`}
    ${props => `border-radius: ${props.size === 'sm' && '11px'} !important;`}
    ${props => `border-radius: ${props.size === 'md' && '11px'} !important;`}
    ${props => `border-radius: ${props.size === 'lg' && '11px'} !important;`}
    ${props => `border-radius: ${props.size === 'xl' && '11px'} !important;`}

    /* paddings */
    ${props => `padding: ${props.size === 'xs' && '9px 40px'} !important;`}
    ${props => `padding: ${props.size === 'sm' && '11px 40px'} !important;`}
    ${props => `padding: ${props.size === 'md' && '14px 40px'} !important;`}
    ${props => `padding: ${props.size === 'lg' && '14px 40px'} !important;`}
    ${props => `padding: ${props.size === 'xl' && '14px 40px'} !important;`}

    ${props => `background-color: ${props.bg} !important;`}
`;

const StyledIconWrapper = styled.div`
    svg {
        /* icon widths */
        ${props => `width: ${props.size === 'xs' && '14px'} !important;`}
        ${props => `width: ${props.size === 'sm' && '16px'} !important;`}
        ${props => `width: ${props.size === 'md' && '20px'} !important;`}
        ${props => `width: ${props.size === 'lg' && '25px'} !important;`}
        ${props => `width: ${props.size === 'xl' && '27px'} !important;`}
    }

    /* icon separation */
    ${props =>
        props.position &&
        props.position === 'left' &&
        `
        padding-right: ${props.size === 'xs' && '10px'} !important;
        padding-right: ${props.size === 'sm' && '10px'} !important;
        padding-right: ${props.size === 'md' && '10px'} !important;
        padding-right: ${props.size === 'lg' && '10px'} !important;
        padding-right: ${props.size === 'xl' && '10px'} !important;
    `}

    /* icon separation */
    ${props =>
        props.position &&
        props.position === 'right' &&
        `
        padding-left: ${props.size === 'xs' && '10px'} !important;
        padding-left: ${props.size === 'sm' && '12px'} !important;
        padding-left: ${props.size === 'md' && '15px'} !important;
        padding-left: ${props.size === 'lg' && '16px'} !important;
        padding-left: ${props.size === 'xl' && '17px'} !important;
    `}
`;

export { StyledButton, StyledIconWrapper };
