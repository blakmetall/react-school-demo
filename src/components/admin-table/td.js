import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RenderIf, Spinner } from '..';
import { useRequestSettings, useNextRequestSettings, useTdValue } from './hooks';
import { StyledDropdownIcon } from './styled';
import theme from '../../theme';

function AdminTableData({
    fieldName,
    fieldValue,
    fieldType,
    fieldTypeSettings,
    row,
    rowLevel,
    requestsSettings,
    onExpand,
    onClose,
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const requestSettings = useRequestSettings(fieldName, rowLevel, requestsSettings);
    const nextRequestSettings = useNextRequestSettings(fieldName, rowLevel, requestsSettings);
    const hasDropdown = !!nextRequestSettings;

    const value = useTdValue(fieldValue, fieldType, fieldTypeSettings, row);
    const [promisedValue, setPromisedValue] = useState();

    const isPromise = !!value && typeof value.then === 'function';
    if (isPromise) {
        value.then(v => setPromisedValue(v));
    }

    useEffect(() => {
        if (isExpanded) {
            onExpand(requestSettings, nextRequestSettings);
        } else {
            onClose();
        }

        // eslint-disable-next-line
    }, [isExpanded]);

    useEffect(() => {
        if (requestSettings && requestSettings.firebase && nextRequestSettings) {
            const { dropdown } = requestSettings.firebase;

            if (dropdown && dropdown.requestOnLoad) {
                setIsExpanded(true);
            }
        }

        // eslint-disable-next-line
    }, []);

    return (
        <td>
            <div className="d-flex align-items-center justify-content-between h-100">
                {/* regular value */}
                <RenderIf isTrue={!isPromise}>
                    <div>{value}</div>
                </RenderIf>

                {/* promised value */}
                <RenderIf isTrue={isPromise && !!promisedValue}>
                    <div>{promisedValue}</div>
                </RenderIf>

                {/* promise value loading */}
                <RenderIf isTrue={isPromise && !promisedValue}>
                    <Spinner size="xx-small" />
                </RenderIf>

                {/* dropdown icon */}
                <RenderIf isTrue={hasDropdown}>
                    <a href="#!" onClick={() => setIsExpanded(!isExpanded)}>
                        <StyledDropdownIcon isExpanded={isExpanded} color={theme.bootstrap.appBlue4} />
                    </a>
                </RenderIf>
            </div>
        </td>
    );
}

AdminTableData.propTypes = {
    fieldName: PropTypes.string,
    fieldValue: PropTypes.any,
    fieldType: PropTypes.oneOf(['text', 'date', 'preview-image', 'preview-pdf', 'firebase-request', 'render']),
    fieldTypeSettings: PropTypes.shape({
        collection: PropTypes.string,
        attribute: PropTypes.string,
    }),
    row: PropTypes.any,
    rowLevel: PropTypes.number,
    requestsSettings: PropTypes.any,
    onExpand: PropTypes.func,
    onClose: PropTypes.func,
};

AdminTableData.defaultProps = {
    fieldName: undefined,
    fieldValue: undefined,
    fieldType: 'text',
    fieldTypeSettings: undefined,
    row: undefined,
    rowLevel: undefined,
    requestsSettings: undefined,
    onExpand: () => {},
    onClose: () => {},
};

export default AdminTableData;
