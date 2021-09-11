import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import theme from '../../../theme';

const StyledContainer = styled.div`
    height: 100vh;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        height: calc(100vh - 90px);
    }
`;

const StyledLogo = styled(Image)`
    width: 100%;
    max-width: 195px;
`;

const StyledLogoContainer = styled.div`
    border: 2px solid #bbbbbb;
    border-top: 0;
    padding-bottom: 40px;
    border-radius: 12px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const StyledMenuItemsWrapper = styled.div`
    height: calc(100vh - 210px);
`;

export { StyledContainer, StyledLogo, StyledLogoContainer, StyledMenuItemsWrapper };
