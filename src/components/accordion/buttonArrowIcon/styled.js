import styled from 'styled-components';
import { UpArrowIcon } from '../../icons';

const StyledArrowICon = styled(UpArrowIcon)`
    transition: all 0.1s ease-out;
    ${props => props.isCollapsed && `transform: rotate(-180deg);`}
`;

export default StyledArrowICon;
