import styled from 'styled-components';
import theme from '../../../theme';

const StyledContainer = styled.div`
    background: ${theme.bootstrap.primary};
    height: 65px;

    .dropdown-toggle::after {
        display: none;
    }

    @media (max-width: ${theme.bootstrap.menuBreakPointPx}) {
        height: auto;
        border-bottom-left-radius: 22px;
        border-bottom-right-radius: 22px;
    }
`;

export { StyledContainer };
