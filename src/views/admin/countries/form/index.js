import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form, Row } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { Button, Input, RenderIf } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import { addCountry, updateCountry, validateOnSaveCountry } from '../../../../store/actions/countries';
import { validateCountry } from './helpers';
import CountriesBatchUploader from './batch';

const CorporateEntitiesForm = ({ editableItem, submitLabel, isCreating, isEditing }) => {
    const [countryName, setCountryName] = useState('');
    const [managerName, setManagerName] = useState('');
    const [managerEmail, setManagerEmail] = useState('');
    const [prevManagerEmail, setPrevManagerEmail] = useState('');

    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCountryName('');
        setManagerName('');
        setManagerEmail('');
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const item = {
            name: countryName.trim(),
            managerEmail,
            managerName,
        };

        const validation = await dispatch(validateOnSaveCountry({ ...item, id: (editableItem && editableItem.id) || '' }));

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addCountry(item))
                    .then(() => {
                        clearForm();
                        dispatch(showSuccessNotification());
                    })
                    .catch(err => {
                        dispatch(showFailedNotification(err));
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }

            if (isEditing) {
                setIsProcessingForm(true);
                dispatch(updateCountry({ docId: editableItem.id, data: item, prevManagerEmail }))
                    .then(() => {
                        setPrevManagerEmail(item.managerEmail);
                        dispatch(showSuccessNotification());
                    })
                    .catch(err => {
                        dispatch(showFailedNotification(err));
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }
        } else {
            dispatch(showFailedNotification(validation.errorMsg));
        }
    };

    // form validation
    const formIsValid = () => {
        return validateCountry({
            name: countryName,
            managerName,
            managerEmail,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCountryName(editableItem.name);
            setManagerName(editableItem.managerName);
            setManagerEmail(editableItem.managerEmail);
            setPrevManagerEmail(editableItem.managerEmail);
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* input fields */}
                <Row className="mb-4">
                    <Col className="col-12 col-lg-4">
                        {/* entidad corporativa */}
                        <Input label="País" value={countryName} onChange={e => setCountryName(e.target.value)} required />
                    </Col>

                    <Col className="col-12 col-lg-4">
                        {/* encargado */}
                        <Input label="Encargado" value={managerName} onChange={e => setManagerName(e.target.value)} required />
                    </Col>

                    <Col className="col-12 col-lg-4">
                        {/* email */}
                        <Input
                            label="Correo electrónico"
                            type="email"
                            value={managerEmail}
                            onChange={e => setManagerEmail(e.target.value)}
                            required
                        />
                    </Col>
                </Row>

                {/* file inputs */}
                <Row className="mb-4 justify-content-between align-items-center">
                    {/* carga por lote */}
                    <RenderIf isTrue={!isEditing}>
                        <Col className="col-12 col-lg-4 position-relative">
                            <CountriesBatchUploader />
                        </Col>
                    </RenderIf>

                    {/* submit */}
                    <Col className="col-12 col-lg-4 order-lg-2 mb-3">
                        <Button
                            fullWidth
                            label={submitLabel}
                            type="submit"
                            variant="success"
                            disabled={!formIsValid() || isProcessingForm}
                        />
                    </Col>
                </Row>
            </Form>
        </>
    );
};

CorporateEntitiesForm.propTypes = {
    editableItem: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
};

CorporateEntitiesForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
};

const mapStateToProps = (state, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
});

const enhance = compose(connect(mapStateToProps, null));

export default enhance(CorporateEntitiesForm);
