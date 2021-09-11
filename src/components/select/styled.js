import styled from 'styled-components';
import { Select } from 'react-rainbow-components';

const StyledSelect = styled(Select)`
    select {
        height: auto;
        background: #f2f8fb;
        font-size: 14px;
        border-color: #afbfc7;

        &:focus,
        &:active {
            border: 0;
            color: #495057;
            background-color: #f2f7fb;
            border-color: #ff5a75;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(217, 0, 36, 0.25);
        }
    }
`;

export { StyledSelect };
