import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form, Row } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { hasValidMimeType } from '../../../../helpers';
import { Button, Input, FileInput, RenderIf, Select } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import {
    addCorporateEntity,
    updateCorporateEntity,
    validateOnSaveCorporateEntity,
} from '../../../../store/actions/corporate-entities';
import { useCountriesOptions } from './hooks';
import { validateCorporateEntity } from './helpers';
import CorporateEntitiesBatchUploader from './batch';

const CorporateEntitiesForm = ({ editableItem, submitLabel, isCreating, isEditing, countries }) => {
    const [countryId, setCountryId] = useState('');
    const [corporateEntityName, setCorporateEntityName] = useState('');
    const [managerName, setManagerName] = useState('');
    const [managerEmail, setManagerEmail] = useState('');
    const [prevManagerEmail, setPrevManagerEmail] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [idSAP, setIdSAP] = useState('');
    const [logo, setLogo] = useState();

    const [isProcessingForm, setIsProcessingForm] = useState(false);
    const [logoErrorMsg, setLogoErrorMsg] = useState();

    const countriesOptions = useCountriesOptions(countries);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCountryId('');
        setCorporateEntityName('');
        setManagerName('');
        setManagerEmail('');
        setPostalCode('');
        setIdSAP('');
        setLogo();
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCountry = countriesOptions.filter(item => item.value === countryId);
        const countryName = (selectedCountry[0] && selectedCountry[0].label) || '';

        const item = {
            countryId,
            countryName,
            name: corporateEntityName.trim(),
            managerEmail,
            managerName,
            postalCode,
            idSAP: idSAP.trim(),
        };

        const uploadList = [];

        const validation = await dispatch(
            validateOnSaveCorporateEntity({ ...item, id: (editableItem && editableItem.id) || '' }),
        );

        if (validation.success) {
            if (isCreating) {
                uploadList.push({ file: logo, dbField: 'logo', baseFolder: 'corporateEntities', fileFolder: 'logos' });

                setIsProcessingForm(true);
                dispatch(addCorporateEntity(item, uploadList))
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
                if (logo) {
                    uploadList.push({ file: logo, dbField: 'logo', baseFolder: 'corporateEntities', fileFolder: 'logos' });
                }

                setIsProcessingForm(true);
                dispatch(updateCorporateEntity({ docId: editableItem.id, data: item, uploadList, prevManagerEmail }))
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

    const handleOnLogoChange = files => {
        const file = files && files.length ? files[0] : undefined;

        if (!file && isCreating) {
            setLogoErrorMsg('El logo es requerido.');
        }

        setLogo(file);
    };

    // form validation
    const formIsValid = () => {
        return validateCorporateEntity(
            {
                countryId,
                name: corporateEntityName,
                managerName,
                managerEmail,
                postalCode,
                logo,
            },
            { isEditing },
        );
    };

    // detect logo and set the proper validation message
    useEffect(() => {
        if (logo) {
            if (!hasValidMimeType(logo, ['image/jpeg', 'image/png'])) {
                setLogoErrorMsg('Archivos permitidos: jpg, png');
            } else {
                setLogoErrorMsg();
            }
        }

        // eslint-disable-next-line
    }, [logo]);

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCountryId(editableItem.countryId);
            setCorporateEntityName(editableItem.name);
            setManagerName(editableItem.managerName);
            setManagerEmail(editableItem.managerEmail);
            setPrevManagerEmail(editableItem.managerEmail);
            setPostalCode(editableItem.postalCode);
            setIdSAP(editableItem.idSAP);
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* input fields */}
                <Row className="mb-4">
                    <Col className="col-12 col-lg-3">
                        {/* entidad corporativa */}
                        <Input
                            label="Entidad corporativa"
                            value={corporateEntityName}
                            onChange={e => setCorporateEntityName(e.target.value)}
                            required
                        />
                    </Col>

                    <Col className="col-12 col-lg-3">
                        {/* category */}
                        <Select
                            label="País"
                            value={countryId}
                            options={countriesOptions}
                            onChange={e => setCountryId(e.target.value)}
                            required
                        />
                    </Col>

                    <Col className="col-12 col-lg-3">
                        {/* encargado */}
                        <Input label="Encargado" value={managerName} onChange={e => setManagerName(e.target.value)} required />
                    </Col>

                    <Col className="col-12 col-lg-3">
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
                <Row className="mb-3">
                    {/* código postal */}
                    <Col className="col-12 col-lg-4">
                        <Input label="Código postal" value={postalCode} onChange={e => setPostalCode(e.target.value)} required />
                    </Col>

                    {/* idSAP */}
                    <Col className="col-12 col-lg-4">
                        <Input label="ID (SAP)" value={idSAP} onChange={e => setIdSAP(e.target.value)} />
                    </Col>

                    <Col className="col-12 col-lg-4">
                        {/* logo */}
                        <FileInput
                            label="Logo de entidad corporativa"
                            placeholder="Seleccionar archivo"
                            onChange={handleOnLogoChange}
                            required={!isEditing}
                            error={logoErrorMsg}
                        />
                    </Col>
                </Row>

                {/* file inputs */}
                <Row className="mb-4 justify-content-between align-items-center">
                    {/* carga por lote */}
                    <RenderIf isTrue={!isEditing}>
                        <Col className="col-12 col-lg-4 position-relative">
                            <CorporateEntitiesBatchUploader />
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
    countries: PropTypes.array,
};

CorporateEntitiesForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    countries: undefined,
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    countries: firestore.ordered.countries,
});

const firestoreQuery = () => {
    const fsQuery = [];

    fsQuery.push({
        collection: 'countries',
    });

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps, firestoreConnect(firestoreQuery)));

export default enhance(CorporateEntitiesForm);
