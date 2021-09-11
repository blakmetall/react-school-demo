import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;

    ${props =>
        !props.hasStarted &&
        `
        display: none;
    `}
`;

const StyledTdContainer = styled.td``;

export { StyledContainer, StyledTdContainer };
