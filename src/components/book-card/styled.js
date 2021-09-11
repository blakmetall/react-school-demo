import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import theme from '../../theme';

const StyledCard = styled.div`
    background: ${theme.bootstrap.success};
    border-radius: 7px;
    max-width: 500px;

    > div {
        padding: 10px;
    }

    :hover {
        cursor: ${props => (props.onClick ? 'pointer' : 'inherit')};
    }
`;

const StyledImg = styled.img`
    border-radius: 7px;
    object-fit: cover;
    object-position: 50% 50%;
    height: 350px !important;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.sm}) {
        height: 300px !important;
    }
`;

const StyledContentCol = styled(Col)`
    padding-left: 25px !important;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        padding-left: 0px !important;
    }
`;

export { StyledCard, StyledImg, StyledContentCol };
