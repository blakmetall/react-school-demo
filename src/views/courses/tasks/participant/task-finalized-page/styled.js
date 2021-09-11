import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import theme from '../../../../../../theme';

export const StyledFilesWrapper = styled(PerfectScrollbar)`
    max-height: 200px;
    overflow-y: scroll;
    background-color: #f2f7fb;
`;

export const StyledQualificationWrapper = styled.p`
    font-family: sans-serif;
    border: 1px solid ${theme.bootstrap.appGray3};
`;
