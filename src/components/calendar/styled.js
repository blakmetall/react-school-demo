import styled from 'styled-components';
import theme from '../../theme';

export const StyledContainer = styled.div`
    h3,
    select,
    abbr {
        color: ${theme.bootstrap.textGray75} !important;
    }
    abbr {
        font-weight: lighter;
    }
`;
