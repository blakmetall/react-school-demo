import React from 'react';
import PropTypes from 'prop-types';
import { AddIcon, DeleteIcon } from '../icons';
import { RenderIf } from '..';
import { StyledRepeatContent, StyledRepeatIconWrapper, StyledRepeaterIconsWrapper, StyledRepeatItem } from './styled';
import theme from '../../theme';

const RepeaterItem = ({ addLabel, index, item, dinamic, render, repeaterLength, onAddItem, onRemoveItem }) => {
    const isDinamic = !!dinamic;
    const isLastItem = index + 1 === repeaterLength;

    const deleteIconStyle = { opacity: 0.7 };

    const renderCustomLabel = () => (
        <span className="text-app-gray-2 app-font-14 font-weight-500 app-clickable" onClick={onAddItem} role="presentation">
            {addLabel}
        </span>
    );

    if (item) {
        return (
            <StyledRepeatItem className="d-flex flex-column" isDinamic={isDinamic}>
                <StyledRepeatContent className="mb-2">{render(item, index)}</StyledRepeatContent>

                <RenderIf isTrue={isDinamic}>
                    <StyledRepeaterIconsWrapper className="d-flex align-items-center pl-0">
                        {/* delete icon */}
                        <StyledRepeatIconWrapper onClick={() => onRemoveItem(index)}>
                            <DeleteIcon color={theme.bootstrap.primary} style={deleteIconStyle} />
                        </StyledRepeatIconWrapper>

                        <RenderIf isTrue={isLastItem}>
                            <div className="d-flex align-items-center">
                                {/* add icon */}
                                <StyledRepeatIconWrapper onClick={onAddItem}>
                                    <AddIcon color={theme.bootstrap.appBlue3} />
                                </StyledRepeatIconWrapper>

                                {/* custom label */}
                                {renderCustomLabel()}
                            </div>
                        </RenderIf>
                    </StyledRepeaterIconsWrapper>
                </RenderIf>
            </StyledRepeatItem>
        );
    }

    if (isDinamic && !item) {
        return (
            <StyledRepeatItem className="d-flex align-items-center mb-2">
                <div className="d-flex align-items-center">
                    {/* add icon */}
                    <StyledRepeatIconWrapper onClick={onAddItem} className="pl-0">
                        <AddIcon color={theme.bootstrap.appBlue3} />
                    </StyledRepeatIconWrapper>

                    {/* custom label */}
                    {renderCustomLabel()}
                </div>
            </StyledRepeatItem>
        );
    }
};

RepeaterItem.propTypes = {
    addLabel: PropTypes.string,
    index: PropTypes.number,
    item: PropTypes.any,
    dinamic: PropTypes.bool,
    render: PropTypes.func,
    repeaterLength: PropTypes.number,
    onAddItem: PropTypes.func,
    onRemoveItem: PropTypes.func,
};

RepeaterItem.defaultProps = {
    addLabel: undefined,
    index: undefined,
    item: undefined,
    dinamic: undefined,
    render: () => {},
    repeaterLength: 0,
    onAddItem: () => {},
    onRemoveItem: () => {},
};

export default RepeaterItem;
