import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { arrayReplacePropValue } from '../../../../helpers';
import { ContentRepeater, Input } from '../../../../components';

const ParticipantsSelectable = ({ participants, onChange, className }) => {
    const [repeatableItems, setRepeatableItems] = useState([]);

    const blueprint = {
        participantName: '',
        participantEmail: '',
    };

    const handleOnChangeRepeater = (replaceValue, dataIndex, replaceProp) => {
        setRepeatableItems(arrayReplacePropValue(repeatableItems, dataIndex, replaceProp, replaceValue));
    };

    useEffect(() => {
        if (repeatableItems && repeatableItems.length) {
            const mapped = repeatableItems.map(item => {
                return {
                    name: item.participantName,
                    email: item.participantEmail,
                };
            });

            onChange(mapped);
        } else {
            onChange([]);
        }

        // eslint-disable-next-line
    }, [repeatableItems]);

    useEffect(() => {
        if (participants) {
            const participantsRepeatableItems = participants.map(p => {
                return {
                    ...blueprint,
                    participantName: p.name,
                    participantEmail: p.email,
                };
            });

            if (!_.isEqual(participantsRepeatableItems, repeatableItems)) {
                setRepeatableItems(participantsRepeatableItems);
            }
        }

        // eslint-disable-next-line
    }, [participants]);

    return (
        <div className={className}>
            <ContentRepeater
                dinamic
                addLabel="Agregar participante"
                data={repeatableItems}
                dataBlueprint={blueprint}
                onAddItem={values => setRepeatableItems(values)}
                onRemoveItem={values => setRepeatableItems(values)}
                render={(renderItem, renderIndex) => {
                    if (renderItem) {
                        const { participantName, participantEmail } = renderItem;

                        return (
                            <>
                                <div className="d-flex flex-column flex-lg-row">
                                    <Col className="col-lg-4 pl-0 pr-0 pr-lg-4">
                                        <Input
                                            label="Nombre del participante"
                                            value={participantName}
                                            onChange={e => handleOnChangeRepeater(e.target.value, renderIndex, 'participantName')}
                                            required
                                        />
                                    </Col>
                                    <Col className="col-lg-4 pl-0 pr-0">
                                        <Input
                                            label="Correo"
                                            value={participantEmail}
                                            onChange={e =>
                                                handleOnChangeRepeater(e.target.value, renderIndex, 'participantEmail')
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

ParticipantsSelectable.propTypes = {
    participants: PropTypes.array,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

ParticipantsSelectable.defaultProps = {
    participants: [],
    onChange: () => {},
    className: undefined,
};

export default ParticipantsSelectable;
