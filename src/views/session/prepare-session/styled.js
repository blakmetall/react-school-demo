import styled from 'styled-components';
import theme from '../../../theme';

const StyledContainer = styled.div`
    overflow: auto;
`;

const StyledSelectionBtn = styled.button`
    ${props =>
        props.active &&
        `
        background-color: ${theme.bootstrap.success} !important;
        color: white !important;
    `}
`;

export { StyledContainer, StyledSelectionBtn };
