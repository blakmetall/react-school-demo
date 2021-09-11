import styled from 'styled-components';
import { Chart, Card } from 'react-rainbow-components';

export const StyledCard = styled(Card)`
    width: 100%;
    ${props => `color: ${props.counterColor} !important`}
`;

export const StyledChart = styled(Chart)`
    height: 300px;
`;

export const StyledChartHeading = styled.div`
    padding-left: 7px;
    padding-right: 7px;

    @media (max-width: 991px) {
        flex-direction: column;
        &:nth-child(1) {
            text-align: center;
        }
    }
`;
