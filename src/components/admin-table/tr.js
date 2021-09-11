import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFirestoreConnect } from 'react-redux-firebase';
import { ColorCircle, RenderIf } from '..';
import { ViewIcon, EditIcon, DeleteIcon } from '../icons';
import { useDropdownQuery, useDropdownRows } from './hooks';
import { StyledIconWrapper } from './styled';
// eslint-disable-next-line
import AdminTableDropdownRows from './dropdownTrs';
import AdminTableData from './td';
import theme from '../../theme';

function AdminTableRow({
    index,
    row,
    rowLevel,
    columnsSettings,
    requestsSettings,
    withColoredCircles,
    onClickViewRow,
    onClickEditRow,
    onClickDeleteRow,
}) {
    const requestSetting = requestsSettings[rowLevel] || {};
    const { rowActions, settings: rowSettings } = requestSetting;

    const hasViewAction = rowActions && rowActions.canView;
    const hasEditAction = rowActions && rowActions.canEdit;
    const hasDeleteAction = rowActions && rowActions.canDelete;

    const [rowRequestSettings, setRowRequestSettings] = useState();
    const [rowNextRequestSettings, setRowNextRequestSettings] = useState();
    const [isExpanded, setIsExpanded] = useState(false);

    const dropdownQuery = useDropdownQuery(row, rowRequestSettings, rowNextRequestSettings);
    const dropdownRows = useDropdownRows(row, rowRequestSettings, rowNextRequestSettings);

    useFirestoreConnect(() => dropdownQuery);

    const onExpand = (requestSettings, nextRequestSettings) => {
        setIsExpanded(true);
        setRowRequestSettings(requestSettings);
        setRowNextRequestSettings(nextRequestSettings);
    };

    const onClose = () => {
        setIsExpanded(false);
        setRowRequestSettings();
        setRowNextRequestSettings();
    };

    const getFieldValue = field => {
        if (row && row[field]) {
            return row[field];
        }

        return undefined;
    };

    return (
        <>
            <tr>
                {/* table color cell */}
                <RenderIf isTrue={withColoredCircles}>
                    <td>
                        <RenderIf isTrue={rowLevel === 0}>
                            <ColorCircle index={index} />
                        </RenderIf>
                    </td>
                </RenderIf>

                {/* render row data */}
                {columnsSettings.map((columnSetting, loopIndex) => {
                    const { field, type, typeSettings } = columnSetting;
                    const key = `td-${rowLevel}-${loopIndex}`;
                    const fieldValue = getFieldValue(field);

                    return (
                        <AdminTableData
                            key={key}
                            row={row}
                            rowLevel={rowLevel}
                            requestsSettings={requestsSettings}
                            fieldName={field}
                            fieldValue={fieldValue}
                            fieldType={type}
                            fieldTypeSettings={typeSettings}
                            onExpand={onExpand}
                            onClose={onClose}
                        />
                    );
                })}

                {/* table actions */}
                <td>
                    <div className="d-flex align-items-center justify-content-end">
                        <RenderIf isTrue={hasViewAction}>
                            <StyledIconWrapper className="ml-3" onClick={() => onClickViewRow(row, rowSettings)}>
                                <ViewIcon size="xs" color={theme.bootstrap.appBlue4} />
                            </StyledIconWrapper>
                        </RenderIf>

                        <RenderIf isTrue={hasEditAction}>
                            <StyledIconWrapper className="ml-3" onClick={() => onClickEditRow(row, rowSettings)}>
                                <EditIcon size="xs" color={theme.bootstrap.appBlue4} />
                            </StyledIconWrapper>
                        </RenderIf>

                        <RenderIf isTrue={hasDeleteAction}>
                            <StyledIconWrapper className="ml-3" onClick={() => onClickDeleteRow(row, rowSettings)}>
                                <DeleteIcon size="xs" color={theme.bootstrap.appBlue4} />
                            </StyledIconWrapper>
                        </RenderIf>
                    </div>
                </td>
            </tr>

            {/* dropdown row data */}
            <AdminTableDropdownRows
                index={index}
                isExpanded={isExpanded}
                rowLevel={rowLevel + 1}
                dropdownRows={dropdownRows}
                columnsSettings={columnsSettings}
                requestsSettings={requestsSettings}
                withColoredCircles={withColoredCircles}
                onClickViewRow={onClickViewRow}
                onClickEditRow={onClickEditRow}
                onClickDeleteRow={onClickDeleteRow}
            />
        </>
    );
}

AdminTableRow.propTypes = {
    index: PropTypes.number,
    row: PropTypes.any,
    rowLevel: PropTypes.number,
    columnsSettings: PropTypes.any,
    requestsSettings: PropTypes.any,
    withColoredCircles: PropTypes.bool,
    onClickViewRow: PropTypes.func,
    onClickEditRow: PropTypes.func,
    onClickDeleteRow: PropTypes.func,
};

AdminTableRow.defaultProps = {
    index: undefined,
    row: undefined,
    rowLevel: undefined,
    columnsSettings: undefined,
    requestsSettings: undefined,
    withColoredCircles: undefined,
    onClickViewRow: () => {},
    onClickEditRow: () => {},
    onClickDeleteRow: () => {},
};

export default AdminTableRow;
