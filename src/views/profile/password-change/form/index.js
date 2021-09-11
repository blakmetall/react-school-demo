import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validator from 'validator';
import { Form, Col } from 'react-bootstrap';
import { ConfirmationModal, Input, Button } from '../../../../components';
// import addTestCollection from '../../../../store/actions/test';
import Message from '../../../../components/message';

const PassworChange = ({ addItem }) => {
    const [currPassword, setCurrPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [onSaveMessage, setOnSaveMessage] = useState('');
    const [onErrorMessage, setOnErrorMessage] = useState('');
    const [passwordNotMatch, setPasswordNotMatch] = useState('');

    const [modalIsVisible, setModalIsVisible] = useState();
    const [icon, setIcon] = useState('success');
    const [titleModal, setTitleModal] = useState('');
    const [subTitleModal, setSubTitleModal] = useState('');
    const [descriotionModal, setDescriotionModal] = useState('');

    const history = useHistory();

    // modals templates
    const showModalSuccess = () => {
        setModalIsVisible(true);
        setIcon('success');
        setTitleModal('Perfecto!');
        setSubTitleModal('Contraseña cambiada con éxito!');
    };
    const showModalError = () => {
        setModalIsVisible(true);
        setIcon('danger');
        setTitleModal(' OH NO!');
        setSubTitleModal('Algo salío mal');
        setDescriotionModal('Por favor inténtalo de nuevo más tarde');
    };

    // Validations
    const formIsValid = () => {
        // passwords  match validation
        if (newPassword === passwordConfirm) {
            setTimeout(() => {
                setPasswordNotMatch('');
            }, 1);
        } else {
            setTimeout(() => {
                setPasswordNotMatch('Las contraseñas no coinciden.');
            }, 1);
            return false;
        }

        if (validator.isEmpty(currPassword, { ignore_whitespace: true })) {
            return false;
        }
        if (validator.isEmpty(newPassword, { ignore_whitespace: true })) {
            return false;
        }
        if (validator.isEmpty(passwordConfirm, { ignore_whitespace: true })) {
            return false;
        }

        return true;
    };

    const clearForm = () => {
        setCurrPassword('');
        setNewPassword('');
        setPasswordConfirm('');
    };

    // onSubmit
    const handleOnSubmit = e => {
        e.preventDefault();

        const item = {
            newPassword,
        };

        // todo: no es add , es update
        addItem(item)
            .then(() => {
                setOnSaveMessage('Contraseña cambiada con éxito!.');
                showModalSuccess();
                clearForm();
                // onSaveSuccess(item);
            })
            .catch(() => {
                setOnErrorMessage('Error al cambiar la contraseña.');
                showModalError();
                // onSaveError();
            });
    };

    return (
        <Form noValidate onSubmit={handleOnSubmit}>
            <Form.Row>
                <Col className="col-12 p-0">
                    <Input
                        label="Contraseña actual:"
                        type="password"
                        value={currPassword}
                        onChange={e => setCurrPassword(e.target.value)}
                    />
                </Col>
                <Col className="col-12 p-0">
                    <Input
                        label="Nueva Contraseña:"
                        type="password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        error={passwordNotMatch}
                    />
                </Col>
                <Col className="col-12 p-0">
                    <Input
                        label="Confirmar nueva contraseña:"
                        type="password"
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)}
                        error={passwordNotMatch}
                    />
                </Col>
                <Col className="col-12">
                    <Button type="submit" fullWidth size="xs" label="Guardar los cambios" disabled={!formIsValid()} />
                </Col>
            </Form.Row>
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
                onConfirm={() => {
                    history.push('/cuenta');
                }}
            />
        </Form>
    );
};

PassworChange.propTypes = {
    addItem: PropTypes.func,
};
PassworChange.defaultProps = {
    addItem: () => {},
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addItem: () => {},
});

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(PassworChange);
