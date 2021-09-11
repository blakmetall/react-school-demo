import styled from 'styled-components';

const StyledIcon = styled.div`
    height: auto;
    position: relative;

    svg {
        width: 100%;
    }

    ${props =>
        props.size === 'xs' &&
        `
        width: 18px;
    `}

    ${props =>
        props.size === 'xs-2' &&
        `
        width: 20px;
    `}

    ${props =>
        props.size === 'sm' &&
        `
        width: 23px;
    `}

    ${props =>
        props.size === 'md' &&
        `
        width: 30px;
    `}

    ${props =>
        props.size === 'lg' &&
        `
        width: 37px;
    `}

    ${props =>
        props.size === 'xl' &&
        `
        width: 44px;
    `}

    ${props =>
        props.size === 'xxl' &&
        `
        width: 51px;
    `}
`;

export { StyledIcon };
