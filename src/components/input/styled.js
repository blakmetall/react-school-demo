import styled from 'styled-components';
import theme from '../../theme';

const StyledErrorMessage = styled.div`
    font-size: 12px;
    padding: 10px 0 0 5px;
    color: ${theme.bootstrap.primary};
    opacity: 0.7;
`;

const StyledMessage = styled.a`
    font-size: 12px;
    padding: 10px 0 0 5px;
    color: ${theme.bootstrap.success};
    opacity: 0.7;
    margin-left: auto;
`;
export { StyledErrorMessage, StyledMessage };
