import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../render-if';
import AdminTableRows from './trs';
import { StyledBottomTr } from './styled';

function AdminTableBody({
    columnsSettings,
    requestsSettings,
    withColoredCircles,
    onClickViewRow,
    onClickEditRow,
    onClickDeleteRow,
}) {
    return (
        <tbody className="text-gray-500">
            <AdminTableRows
                rowLevel={0}
                withColoredCircles={withColoredCircles}
                onClickViewRow={onClickViewRow}
                onClickEditRow={onClickEditRow}
                onClickDeleteRow={onClickDeleteRow}
                columnsSettings={columnsSettings}
                requestsSettings={requestsSettings}
            />

            {/* bottom table style */}
            <StyledBottomTr>
                <RenderIf isTrue={withColoredCircles}>
                    <td>&nbsp;</td>
                </RenderIf>

                {columnsSettings.map((v, index) => {
                    const key = `bottom-td-${index}`;

                    return <td key={key}>&nbsp;</td>;
                })}

                {/* actions td */}
                <td>&nbsp;</td>
            </StyledBottomTr>
        </tbody>
    );
}

AdminTableBody.propTypes = {
    columnsSettings: PropTypes.any,
    requestsSettings: PropTypes.any,
    withColoredCircles: PropTypes.bool,
    onClickViewRow: PropTypes.func,
    onClickEditRow: PropTypes.func,
    onClickDeleteRow: PropTypes.func,
};

AdminTableBody.defaultProps = {
    columnsSettings: undefined,
    requestsSettings: undefined,
    withColoredCircles: undefined,
    onClickViewRow: () => {},
    onClickEditRow: () => {},
    onClickDeleteRow: () => {},
};

export default AdminTableBody;
