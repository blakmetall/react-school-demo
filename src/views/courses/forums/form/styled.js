import styled from 'styled-components';
import theme from '../../../../theme';

const StyledFormActionsWrapper = styled.div`
    padding-top: 31px;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        padding-top: 15px;
    }
`;

export { StyledFormActionsWrapper };
