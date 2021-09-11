import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { arrayReplacePropValue } from '../../../../helpers';
import { ContentRepeater, Datepicker, Input, Select } from '../../../../components';
import { getFacilitatorsStatusOptions } from './helpers';

const FacilitatorsManagersSelectable = ({ managers, onChange, className }) => {
    const [repeatableItems, setRepeatableItems] = useState([]);

    const blueprint = {
        managerName: '',
        managerEmail: '',
        managerConferenceAccount: '',
        managerConferencePassword: '',
        managerConferenceCancelDate: new Date(),
        managerStatusSlug: '',
    };

    const handleOnChangeRepeater = (replaceValue, dataIndex, replaceProp) => {
        setRepeatableItems(arrayReplacePropValue(repeatableItems, dataIndex, replaceProp, replaceValue));
    };

    useEffect(() => {
        if (repeatableItems && repeatableItems.length) {
            const mapped = repeatableItems.map(item => {
                const selectedStatus = getFacilitatorsStatusOptions().filter(v => v.value === item.managerStatusSlug);
                const selectedStatusName = (selectedStatus[0] && selectedStatus[0].label) || '';

                return {
                    name: item.managerName,
                    email: item.managerEmail,
                    conferenceAccount: item.managerConferenceAccount,
                    conferencePassword: item.managerConferencePassword,
                    conferenceCancelDate: item.managerConferenceCancelDate,
                    statusSlug: item.managerStatusSlug,
                    statusName: selectedStatusName,
                    isFacilitator: true,
                };
            });

            onChange(mapped);
        } else {
            onChange([]);
        }

        // eslint-disable-next-line
    }, [repeatableItems]);

    useEffect(() => {
        if (managers) {
            const managersRepeatableItems = managers.map(m => {
                const cancelDate =
                    (m.conferenceCancelDate && m.conferenceCancelDate.seconds && m.conferenceCancelDate.toDate()) ||
                    (m.conferenceCancelDate !== undefined && m.conferenceCancelDate);

                return {
                    ...blueprint,
                    managerName: m.name,
                    managerEmail: m.email,
                    managerConferenceAccount: m.conferenceAccount,
                    managerConferencePassword: m.conferencePassword,
                    managerConferenceCancelDate: cancelDate,
                    managerStatusSlug: m.statusSlug,
                };
            });

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
                addLabel="Agregar facilitador"
                data={repeatableItems}
                dataBlueprint={blueprint}
                onAddItem={values => setRepeatableItems(values)}
                onRemoveItem={values => setRepeatableItems(values)}
                render={(renderItem, renderIndex) => {
                    if (renderItem) {
                        const {
                            managerName,
                            managerEmail,
                            managerConferenceAccount,
                            managerConferencePassword,
                            managerConferenceCancelDate,
                            managerStatusSlug,
                        } = renderItem;

                        return (
                            <>
                                <div className="d-flex flex-column flex-md-row">
                                    <Col className="col-md-6 col-lg-4 pl-0 pr-0 pr-md-4">
                                        <Input
                                            label="Nombre del facilitador"
                                            value={managerName}
                                            onChange={e => handleOnChangeRepeater(e.target.value, renderIndex, 'managerName')}
                                            required
                                        />
                                    </Col>

                                    <Col className="col-md-6 col-lg-4 pr-0 pl-0 pr-lg-4">
                                        <Input
                                            label="Correo"
                                            value={managerEmail}
                                            onChange={e => handleOnChangeRepeater(e.target.value, renderIndex, 'managerEmail')}
                                            required
                                        />
                                    </Col>
                                </div>

                                <div className="d-flex flex-column flex-lg-row">
                                    <Col className="col-lg-4 pl-0 pr-0 pr-lg-4">
                                        <Input
                                            label="Cuenta para video conferencia"
                                            value={managerConferenceAccount}
                                            onChange={e =>
                                                handleOnChangeRepeater(e.target.value, renderIndex, 'managerConferenceAccount')
                                            }
                                            required
                                        />
                                    </Col>

                                    <Col className="col-lg-4 pr-0 pl-0 pr-lg-4">
                                        <Input
                                            label="Contraseña"
                                            value={managerConferencePassword}
                                            onChange={e =>
                                                handleOnChangeRepeater(e.target.value, renderIndex, 'managerConferencePassword')
                                            }
                                            required
                                        />
                                    </Col>

                                    <Col className="col-lg-4 pr-0 pl-0 pr-0">
                                        <Datepicker
                                            label="Fecha de próxima cancelación"
                                            value={managerConferenceCancelDate}
                                            onChange={date =>
                                                handleOnChangeRepeater(date, renderIndex, 'managerConferenceCancelDate')
                                            }
                                            required
                                        />
                                    </Col>
                                </div>

                                <div className="d-flex flex-column flex-lg-row">
                                    <Col className="col-lg-4 pl-0 pr-0 pr-lg-4">
                                        <Select
                                            label="Status"
                                            value={managerStatusSlug}
                                            options={getFacilitatorsStatusOptions()}
                                            onChange={e =>
                                                handleOnChangeRepeater(e.target.value, renderIndex, 'managerStatusSlug')
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

FacilitatorsManagersSelectable.propTypes = {
    managers: PropTypes.array,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

FacilitatorsManagersSelectable.defaultProps = {
    managers: [],
    onChange: () => {},
    className: undefined,
};

export default FacilitatorsManagersSelectable;
