import styled from 'styled-components';
import { Row } from 'react-bootstrap';

const StyledWrapper = styled(Row)`
    @media (max-width: 390px) {
        flex-direction: column;
    }
`;

export default StyledWrapper;
