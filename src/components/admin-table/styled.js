import styled from 'styled-components';
import { DownArrowIcon } from '../icons';
import theme from '../../theme';

const StyledAddNew = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

const StyledBottomTr = styled.tr`
    height: 5px;

    td {
        padding: 0 !important;
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: ${theme.bootstrap.menuBreakPointPx}) {
        ${props =>
            props.isMenuOpen &&
            `
            .table-responsive {
                max-width: calc(100vw - 378px);
            }
        `}

        ${props =>
            !props.isMenuOpen &&
            `
            .table-responsive {
                max-width: calc(100vw - 183px);
            }
        `}
    }
`;

const StyledColoredTh = styled.th`
    width: 70px;
`;

const StyledDropdownIcon = styled(DownArrowIcon)`
    margin-left: 12px;
    width: 16px !important;
    transition: all 0.1s ease-in-out;

    ${props =>
        props.isExpanded &&
        `
        transform: rotate(180deg);
    `}

    &:hover {
        cursor: pointer;
    }
`;

const StyledEmptyTr = styled.tr`
    color: #212529;
    background-color: rgb(163 163 163 / 8%);
    text-align: left;

    td {
        padding-left: 35px;
    }
`;

const StyledIconWrapper = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const StyledPreviewIconWrapper = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const StyledTable = styled.table`
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

    tbody {
        tr {
            td {
                border-right: 1px solid #f3f3f3 !important;
                border-bottom: 1px solid #f3f3f3 !important;
                padding-top: 15px !important;
                padding-bottom: 15px !important;

                > div {
                    line-height: 1.5em;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                }
            }

            &:last-child {
                td {
                    padding-bottom: 0 !important;
                }
            }
        }
    }

    th {
        padding: 15px !important;
        white-space: nowrap;
        font-size: 14px;
        font-weight: 500;
    }

    td {
        color: #a1a1a1;
        font-size: 14px;
        font-weight: 400;
    }
`;

const StyledTh = styled.th.attrs(props => {
    return {
        customwidth: props.customWidth || 'auto',
    };
})`
    min-width: ${props => props.customwidth};
`;

const StyledThActions = styled.th`
    min-width: 125px;
`;

export {
    StyledAddNew,
    StyledBottomTr,
    StyledContainer,
    StyledColoredTh,
    StyledEmptyTr,
    StyledIconWrapper,
    StyledPreviewIconWrapper,
    StyledTable,
    StyledTh,
    StyledThActions,
    StyledDropdownIcon,
};
