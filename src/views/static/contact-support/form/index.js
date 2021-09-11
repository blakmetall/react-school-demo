/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validator from 'validator';
import { Form, Col } from 'react-bootstrap';
import { ReCaptcha } from 'react-rainbow-components';
// import addTestCollection from '../../../../store/actions/test';
import { ConfirmationModal, Button, Message, Select, Textarea } from '../../../../components';
import { getReCaptchaApiKey, isProduction } from '../../../../helpers';

const issuesOptions = [
    { value: 'Soporte técnico', label: 'Soporte técnico' },
    { value: 'Administración', label: 'Administración' },
    { value: 'Uso de plataforma', label: 'Uso de plataforma' },
    { value: 'Mis licencias', label: 'Mis licencias' },
];

const SupportForm = ({ addItem }) => {
    const [issue, setIssue] = useState('');
    const [message, setMessage] = useState('');
    const [reCaptchaToken, setReCaptchaToken] = useState();
    const [formReCaptchaErrorLabel, setFormReCaptchaErrorLabel] = useState();

    const [onSaveMessage, setOnSaveMessage] = useState('');
    const [onErrorMessage, setOnErrorMessage] = useState('');

    const [modalIsVisible, setModalIsVisible] = useState();
    const [icon, setIcon] = useState('success');
    const [titleModal, setTitleModal] = useState('');
    const [subTitleModal, setSubTitleModal] = useState('');
    const [descriotionModal, setDescriotionModal] = useState('');

    // modals templates
    const showModalSuccess = () => {
        setModalIsVisible(true);
        setIcon('success');
        setTitleModal('Perfecto!');
        setSubTitleModal('Datos enviados con éxito!');
    };
    const showModalError = () => {
        setModalIsVisible(true);
        setIcon('danger');
        setTitleModal(' OH NO!');
        setSubTitleModal('Algo salío mal');
        setDescriotionModal('Por favor inténtalo de nuevo más tarde');
    };

    const formIsValid = () => {
        if (validator.isEmpty(issue, { ignore_whitespace: true })) {
            return false;
        }
        if (validator.isEmpty(message, { ignore_whitespace: true })) {
            return false;
        }
        return true;
    };

    const reCaptchaRef = useRef();
    const reCaptchaApiKey = getReCaptchaApiKey() || '';

    const clearForm = () => {
        setIssue('');
        setMessage('');
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        const item = {
            issue,
            message,
        };

        addItem(item)
            .then(() => {
                setOnSaveMessage('Enviado con exito!.');
                clearForm();
                // onSaveSuccess(item);
                showModalSuccess();
            })
            .catch(() => {
                setOnErrorMessage('Error al enviar.');
                // onSaveError();
                showModalError();
            });
    };

    const onReCaptchaChange = token => {
        setReCaptchaToken(token);

        if (isProduction() && !token) {
            setFormReCaptchaErrorLabel('Por favor verifica que no eres un robot.');
        } else {
            setFormReCaptchaErrorLabel('');
        }
    };

    return (
        <Form noValidate onSubmit={handleOnSubmit}>
            <Form.Row className="m-0 p-0">
                <h1 className="app-font-18 font-weight-300 text-app-gray ml-0 mb-5 p-0">Contactar Soporte School Demo</h1>
            </Form.Row>

            {/* select - textArea */}
            <Form.Row className="justify-content-center align-items-start">
                <Col className="col-12">
                    <Select
                        label="Asunto: "
                        className=""
                        value={issue}
                        options={issuesOptions}
                        onChange={e => setIssue(e.target.value)}
                        required
                    />
                </Col>
                <Col className="col-12">
                    <Textarea
                        required
                        label="Mensaje:"
                        className=""
                        rows="4"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </Col>
            </Form.Row>

            {/* captcha */}
            <Form.Row className="justify-content-center align-items-center mb-4">
                {/* todo : funcionamiento del re-captcha */}
                <ReCaptcha
                    siteKey={reCaptchaApiKey}
                    ref={reCaptchaRef}
                    error={formReCaptchaErrorLabel}
                    onChange={token => onReCaptchaChange(token)}
                    className=""
                />
            </Form.Row>

            {/* button */}
            <Col className="p-0">
                <Button type="submit" fullWidth size="xs" label="Enviar" disabled={!formIsValid()} />
            </Col>

            {/* messages */}
            <Message
                className="text-center text-lg-right pr-0 pr-lg-1"
                showIf={!!onSaveMessage}
                message={onSaveMessage}
                duration={3500}
                onComplete={() => setOnSaveMessage()}
            />
            <Message
                className="text-center text-lg-right pr-0 pr-lg-1"
                showIf={!!onErrorMessage}
                message={onErrorMessage}
                duration={3500}
                onComplete={() => setOnErrorMessage()}
                variant="error"
            />
            <ConfirmationModal
                show={modalIsVisible}
                onHide={() => setModalIsVisible()}
                icon={icon}
                title={titleModal}
                subtitle={subTitleModal}
                cancelLabel={false}
                description={descriotionModal}
            />
        </Form>
    );
};

SupportForm.propTypes = {
    addItem: PropTypes.func,
};
SupportForm.defaultProps = {
    addItem: () => {},
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    addItem: () => {},
});

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(SupportForm);
