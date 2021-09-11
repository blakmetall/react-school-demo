import styled from 'styled-components';
import { Card } from '../../../../../components';

export const StyledTable = styled.th`
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    line-height: 0;

    thead {
        color: white;

        th {
            line-height: 1.2em;
        }
    }

    td {
    }

    tbody {
        tr {
            td {
                &:first-child {
                    div {
                        text-align: left !important;
                    }
                }

                div {
                    line-height: 1.5em;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                }
            }

            &:first-child {
                td {
                    padding-top: 20px;
                }
            }

            &:nth-last-child(-n + 1) {
                td {
                    border-bottom: 0 !important;
                }
            }
        }
    }

    th {
        padding: 20px !important;
        white-space: nowrap;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
    }

    td {
        padding: 20px !important;
        color: #a1a1a1;
        font-size: 14px;
        font-weight: 400;
        border-bottom: 1px solid #f3e8d7 !important;
        vertical-align: middle !important;
        text-align: center;
    }
`;

export const StyledCard = styled(Card)`
    overflow: hidden;
    border: 0 !important;
`;
