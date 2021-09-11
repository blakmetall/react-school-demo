import styled from 'styled-components';
import theme from '../../../../../../../../theme';

export const StyledContainer = styled.div`
    border: 1px solid ${theme.bootstrap.appGray6};
`;

export const StyledSuccessFormCheckWrapper = styled.div`
    .custom-control-input:checked ~ .custom-control-label::before {
        border-color: ${theme.bootstrap.appGreen} !important;
        background-color: ${theme.bootstrap.appGreen} !important;
    }
`;

export const StyledDangerFormCheckWrapper = styled.div`
    .form-check {
        background: green;
    }
`;
