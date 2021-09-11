import styled from 'styled-components';
import theme from '../../../../theme';

export const StyledIframe = styled.iframe`
    width: 100%;
    height: calc(75vw / 1.77);
    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        height: calc(100vw / 1.77);
    }
`;

export default StyledIframe;
