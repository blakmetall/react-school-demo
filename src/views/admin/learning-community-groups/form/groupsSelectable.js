import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { arrayReplacePropValue } from '../../../../helpers';
import { ContentRepeater, Input } from '../../../../components';

const GroupsSelectable = ({ groups, onChange, className }) => {
    const [repeatableItems, setRepeatableItems] = useState([]);

    const blueprint = {
        groupId: '',
        groupName: '',
        groupLearningCommunityGroupId: '',
    };

    const handleOnChangeRepeater = (replaceValue, dataIndex, replaceProp) => {
        setRepeatableItems(arrayReplacePropValue(repeatableItems, dataIndex, replaceProp, replaceValue));
    };

    useEffect(() => {
        if (repeatableItems && repeatableItems.length) {
            const mapped = repeatableItems.map(item => {
                return {
                    id: item.groupId,
                    name: item.groupName,
                    learningCommunityGroupId: item.groupLearningCommunityGroupId,
                };
            });

            onChange(mapped);
        } else {
            onChange([]);
        }

        // eslint-disable-next-line
    }, [repeatableItems]);

    useEffect(() => {
        if (groups) {
            const groupsRepeatableItems = groups.map(g => {
                return {
                    ...blueprint,
                    groupId: g.id,
                    groupName: g.name,
                    groupLearningCommunityGroupId: g.learningCommunityGroupId,
                };
            });

            if (!_.isEqual(groupsRepeatableItems, repeatableItems)) {
                setRepeatableItems(groupsRepeatableItems);
            }
        }

        // eslint-disable-next-line
    }, [groups]);

    return (
        <div className={className}>
            <ContentRepeater
                dinamic
                addLabel="Agregar grupo"
                data={repeatableItems}
                dataBlueprint={blueprint}
                onAddItem={values => setRepeatableItems(values)}
                onRemoveItem={values => setRepeatableItems(values)}
                render={(renderItem, renderIndex) => {
                    if (renderItem) {
                        const { groupName } = renderItem;

                        return (
                            <>
                                <div className="d-flex flex-column flex-lg-row">
                                    <Col className="col-lg-4 pl-0 pr-0 pr-lg-4">
                                        <Input
                                            label="Grupo"
                                            value={groupName}
                                            onChange={e => handleOnChangeRepeater(e.target.value, renderIndex, 'groupName')}
                                            required
                                        />
                                    </Col>
                                </div>
                            </>
                        );
                    }

                    return <></>;
                }}
            />
        </div>
    );
};

GroupsSelectable.propTypes = {
    groups: PropTypes.array,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

GroupsSelectable.defaultProps = {
    groups: [],
    onChange: () => {},
    className: undefined,
};

export default GroupsSelectable;
