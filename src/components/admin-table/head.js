import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../render-if';
import { StyledColoredTh, StyledThActions, StyledTh } from './styled';

function AdminTableHead({ columnsSettings, withColoredCircles }) {
    return (
        <thead className="bg-info">
            <tr>
                {/* color th  */}
                <RenderIf isTrue={withColoredCircles}>
                    <StyledColoredTh>&nbsp;</StyledColoredTh>
                </RenderIf>

                {columnsSettings.map((item, index) => {
                    const { label, colWidth } = item;
                    const key = `th-${index}`;
                    const customWidth = colWidth || 'auto';

                    return (
                        <StyledTh key={key} customWidth={customWidth}>
                            {label}
                        </StyledTh>
                    );
                })}

                {/* actions th */}
                <StyledThActions>&nbsp;</StyledThActions>
            </tr>
        </thead>
    );
}

AdminTableHead.propTypes = {
    columnsSettings: PropTypes.any,
    withColoredCircles: PropTypes.any,
};

AdminTableHead.defaultProps = {
    columnsSettings: undefined,
    withColoredCircles: undefined,
};

export default AdminTableHead;
