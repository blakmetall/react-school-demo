import React from 'react';
import PropTypes from 'prop-types';
import { useMappedRows } from './hooks';
// eslint-disable-next-line
import AdminTableRow from './tr';
import { StyledEmptyTr } from './styled';

function AdminTableDropdownRows({
    isExpanded,
    rowLevel,
    dropdownRows,
    columnsSettings,
    requestsSettings,
    withColoredCircles,
    onClickViewRow,
    onClickEditRow,
    onClickDeleteRow,
}) {
    const mappedRows = useMappedRows(dropdownRows, requestsSettings, rowLevel);
    const hasRows = mappedRows && mappedRows.length;

    if (isExpanded && hasRows) {
        return (
            <>
                {mappedRows.map((item, index) => {
                    const key = `tr-dropdown-${index}`;

                    return (
                        <AdminTableRow
                            key={key}
                            index={index}
                            row={item}
                            rowLevel={rowLevel}
                            columnsSettings={columnsSettings}
                            requestsSettings={requestsSettings}
                            withColoredCircles={withColoredCircles}
                            onClickViewRow={onClickViewRow}
                            onClickEditRow={onClickEditRow}
                            onClickDeleteRow={onClickDeleteRow}
                        />
                    );
                })}
            </>
        );
    }

    if (isExpanded && !hasRows) {
        return (
            <StyledEmptyTr>
                <td colSpan="100%">No se encontraron datos.</td>
            </StyledEmptyTr>
        );
    }

    return <></>;
}

AdminTableDropdownRows.propTypes = {
    isExpanded: PropTypes.bool,
    rowLevel: PropTypes.number,
    dropdownRows: PropTypes.array,
    withColoredCircles: PropTypes.bool,
    onClickViewRow: PropTypes.func,
    onClickEditRow: PropTypes.func,
    onClickDeleteRow: PropTypes.func,
    columnsSettings: PropTypes.any,
    requestsSettings: PropTypes.any,
};

AdminTableDropdownRows.defaultProps = {
    isExpanded: undefined,
    rowLevel: 0,
    dropdownRows: undefined,
    withColoredCircles: undefined,
    onClickViewRow: () => {},
    onClickEditRow: () => {},
    onClickDeleteRow: () => {},
    columnsSettings: undefined,
    requestsSettings: undefined,
};

export default AdminTableDropdownRows;
