import styled from 'styled-components';
import { ScrollContent } from '../../../../../components';
import theme from '../../../../../theme';

export const StyledScrollContent = styled(ScrollContent)`
    border-left: 0.8px solid ${theme.bootstrap.secondary};
    border-right: 0.8px solid ${theme.bootstrap.secondary};
`;

export const StyledTable = styled.table`
    margin-bottom: 0px !important;
    thead {
        color: white;
        background-color: ${theme.bootstrap.appGray};

        th {
            white-space: nowrap;
        }

        th,
        td {
            font-weight: 500;
        }

        & > tr > th:first-child {
            border-radius: 15px 0 0 0;
        }

        & > tr > th:last-child {
            border-radius: 0 15px 0 0;
        }
    }

    tbody {
        border-radius: 15px !important;

        td {
            color: ${theme.bootstrap.appGray2};
            white-space: nowrap;
        }
    }
`;

export const StyledTableFooter = styled.div`
    /* display: block; */
    background-color: ${theme.bootstrap.appGray};
    border-radius: 0 0 15px 15px;

    height: 10px;
    width: 100% !important;

    /* min-width: 236px; */
`;
