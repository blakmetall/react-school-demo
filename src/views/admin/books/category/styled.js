import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import theme from '../../../../theme';

const StyledIcon = styled(Image)`
    width: 39px;
    height: 39px;
`;

const StyledIconWrapper = styled.div`
    background: #d6cbb9;
    border-radius: 9px;
    padding: 17px;
    min-width: 85px;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        min-width: 70px;
    }
`;

export { StyledIcon, StyledIconWrapper };
