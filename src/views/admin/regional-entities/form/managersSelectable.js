import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { arrayReplacePropValue } from '../../../../helpers';
import { ContentRepeater, Input } from '../../../../components';

const RegionalEntityManagersSelectable = ({ managers, onChange, className }) => {
    const [repeatableItems, setRepeatableItems] = useState([]);

    const blueprint = {
        managerNameValue: '',
        managerEmailValue: '',
    };

    const handleOnChangeRepeater = (replaceValue, dataIndex, replaceProp) => {
        setRepeatableItems(arrayReplacePropValue(repeatableItems, dataIndex, replaceProp, replaceValue));
    };

    useEffect(() => {
        if (repeatableItems && repeatableItems.length) {
            const mapped = repeatableItems.map(item => ({
                name: item.managerNameValue,
                email: item.managerEmailValue,
            }));

            onChange(mapped);
        } else {
            onChange([]);
        }

        // eslint-disable-next-line
    }, [repeatableItems]);

    useEffect(() => {
        if (managers) {
            const managersRepeatableItems = managers.map(m => ({
                ...blueprint,
                managerNameValue: m.name,
                managerEmailValue: m.email,
            }));

            if (!_.isEqual(managersRepeatableItems, repeatableItems)) {
                setRepeatableItems(managersRepeatableItems);
            }
        }

        // eslint-disable-next-line
    }, [managers]);

    return (
        <div className={className}>
            <ContentRepeater
                dinamic
                addLabel="Agregar Encargado"
                data={repeatableItems}
                dataBlueprint={blueprint}
                onAddItem={values => setRepeatableItems(values)}
                onRemoveItem={values => setRepeatableItems(values)}
                render={(renderItem, renderIndex) => {
                    if (renderItem) {
                        const { managerNameValue, managerEmailValue } = renderItem;

                        return (
                            <>
                                <div className="d-flex flex-column flex-md-row">
                                    {/* book idSAP */}
                                    <Col className="col-md-6 pl-0 pr-0 pr-md-3">
                                        <Input
                                            label="Encargado de la entidad regional"
                                            value={managerNameValue}
                                            onChange={e =>
                                                handleOnChangeRepeater(e.target.value, renderIndex, 'managerNameValue')
                                            }
                                            required
                                        />
                                    </Col>

                                    {/* book name */}
                                    <Col className="col-md-6 pr-0 pl-0 pl-md-3">
                                        <Input
                                            label="Correo"
                                            value={managerEmailValue}
                                            onChange={e =>
                                                handleOnChangeRepeater(e.target.value, renderIndex, 'managerEmailValue')
                                            }
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

RegionalEntityManagersSelectable.propTypes = {
    managers: PropTypes.array,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

RegionalEntityManagersSelectable.defaultProps = {
    managers: [],
    onChange: () => {},
    className: undefined,
};

export default RegionalEntityManagersSelectable;
