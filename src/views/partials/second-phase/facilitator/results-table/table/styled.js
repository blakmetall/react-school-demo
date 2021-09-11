import styled from 'styled-components';
import { Input } from '../../../../../../components';
import theme from '../../../../../../theme';

// ──── #layout table styles ────

export const StyledResultsTable = styled.div`
    display: flex;
    flex-basis: fit-content;
    overflow: hidden;
    background-color: white;
`;

// ───── columns's ─────
export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyledColumnScrollable = styled(StyledColumn)`
    min-width: 0px;
`;

// ───── tr's ─────

// tr-left
export const StyledLeftTr = styled.div`
    width: 200px;
`;

export const StyledLeftTrForTh = styled(StyledLeftTr)`
    height: 150px;
    padding-bottom: 4px;
    background-color: ${theme.bootstrap.info};
`;

// tr-center
export const StyledCenterTr = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const StyledCenterTrWrapper = styled(StyledCenterTr)`
    flex-direction: column;
`;

export const StyledTrQualifications = styled.div`
    display: flex;
    flex-shrink: 0;
`;

// tr-right
export const StyledRightTr = styled.div`
    display: flex;
`;
export const StyledRightTdWrapper = styled.div;

// ───── th's ─────
export const StyledRotatedTitleWrapper = styled.div`
    height: 150px;
    width: 50px;
    color: black;
    background-color: ${theme.bootstrap.info};
    position: relative;
`;

// titles
export const StyledTitle = styled.div`
    padding-left: 20px;
    color: white;
`;

export const StyledRotatedTitle = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform-origin: left;
    transform: rotate(-90deg);
    white-space: nowrap;
`;

// ───── td's ─────
export const StyledTd = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-bottom: 0.5px solid ${theme.bootstrap.info};

    ${props =>
        props.bordered &&
        `
            &:first-of-type {
                border-left: 0.25px solid ${theme.bootstrap.info};
            }
            border-right: 0.25px solid ${theme.bootstrap.info};
        `}
`;

export const StyledAvatarTd = styled(StyledTd)`
    padding-left: 20px;
    justify-content: start;
    height: 50px;
    width: 100%;
`;

// ──── #appearance styles ────

export const StyledTdInputWrapper = styled(StyledTd)`
    &:focus-within {
        border: 1.5px solid ${theme.bootstrap.appBlue};
        background-color: #f2f7fb;
    }
`;

export const StyledButtonsWrapper = styled.div`
    display: flex;
`;

/* reset input defaults */
export const StyledInput = styled(Input)`
    &.mb-4 {
        margin-bottom: 0px !important;
    }

    input {
        border: none !important;
        background: none !important;

        &:focus,
        &:active {
            box-shadow: none !important;
            border: none !important;
            outline: none;
        }
    }
`;

// footer
export const StyledFooter = styled.div`
    width: 100%;
    height: ${props => props.height};
`;
