import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from '..';
import RepeaterItem from './item';

const ContentRepeater = ({ addLabel, data, dataBlueprint, dinamic, render, className, onAddItem, onRemoveItem }) => {
    const renderRepeater = !!data && !!data.length;

    const handleOnAddItem = () => {
        if (dataBlueprint) {
            onAddItem([...data, { ...dataBlueprint }]);
        } else {
            onAddItem([...data]);
        }
    };

    const handleOnRemoveItem = index => {
        if (data.length) {
            const removedItem = data[index] || {};
            const filteredItems = data.filter((v, filterIndex) => filterIndex !== index);

            onRemoveItem(filteredItems, removedItem);
        }
    };

    return (
        <div className={className}>
            <div className="d-flex flex-column">
                {/* repeater list */}
                <RenderIf isTrue={!!renderRepeater}>
                    {data.map((item, index) => {
                        const key = `content-repeat-${index}`;

                        return (
                            <RepeaterItem
                                key={key}
                                index={index}
                                item={item}
                                dinamic={dinamic}
                                render={render}
                                repeaterLength={data.length}
                                addLabel={addLabel}
                                onAddItem={handleOnAddItem}
                                onRemoveItem={handleOnRemoveItem}
                            />
                        );
                    })}
                </RenderIf>

                {/* empty repeater */}
                <RenderIf isTrue={!renderRepeater}>
                    <RepeaterItem dinamic={dinamic} onAddItem={handleOnAddItem} addLabel={addLabel} />
                </RenderIf>
            </div>
        </div>
    );
};

ContentRepeater.propTypes = {
    addLabel: PropTypes.string,
    data: PropTypes.array,
    dataBlueprint: PropTypes.any,
    dinamic: PropTypes.bool,
    render: PropTypes.func,
    className: PropTypes.string,
    onAddItem: PropTypes.func,
    onRemoveItem: PropTypes.func,
};

ContentRepeater.defaultProps = {
    addLabel: '',
    data: [],
    dataBlueprint: undefined,
    dinamic: undefined,
    render: () => {},
    className: undefined,
    onAddItem: () => {},
    onRemoveItem: () => {},
};

export default ContentRepeater;
