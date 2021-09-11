import styled from 'styled-components';
import { DateTimePicker } from 'react-rainbow-components';

export const StyledDateTimePicker = styled(DateTimePicker)`
    input {
        font-size: 14px;
        height: 35px;
        background: #f2f7fb !important;
        border-color: #ddd;

        &:active,
        &:focus {
            border: 1px solid #ff5a75;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(217, 0, 36, 0.25);
        }
    }
`;
