import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import theme from '../../../theme';

const StyledBookImg = styled(Image)`
    width: 100%;
    max-height: 100vh;

    animation-name: fadeIn, slideInLeft;
    animation-duration: 2s, 2s;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        max-width: 80px;
        margin: 1rem 0;
    }
`;

export { StyledBookImg };
