import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const StyledWrapper = styled(PerfectScrollbar).attrs(props => {
    return { maxHeight: props.maxHeight && !props.height ? props.maxHeight : null };
})`
    overflow: scroll;
    background-color: ${props => props.background};
    min-height: 64px; // mimic the default input height
    height: ${props => props.height} !important;
    max-height: ${props => props.maxHeight};
`;
