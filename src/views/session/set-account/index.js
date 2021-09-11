import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { ReCaptcha } from 'react-rainbow-components';
import { Col, Form, Row } from 'react-bootstrap';
import { Button, Card, Checkbox, Input, RenderIf, Spinner } from '../../../components';
import { getReCaptchaApiKey, isProduction } from '../../../helpers';
import { validateSetAccount } from './helpers';
import { createUser, emailHasProfile, hasValidCreateAccountToken, clearAuth } from '../../../store/actions/auth';
import { clearUI } from '../../../store/actions/ui';
import { StyledBookImg } from './styled';

const SetPasswordPage = ({ auth, isLoggedIn, email, token }) => {
    const { profile, role } = auth;

    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordRepeatError, setPasswordRepeatError] = useState('');
    const [policiesAccepted, setPoliciesAccepted] = useState(false);

    const reCaptchaRef = useRef();
    const [reCaptchaToken, setReCaptchaToken] = useState();
    const [reCaptchaErrorLabel, setReCaptchaErrorLabel] = useState();

    const [canCreateAccount, setCanCreateAccount] = useState();
    const [hasProfile, setHasProfile] = useState();
    const [tokenHasExpired, setTokenHasExpired] = useState();

    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const isLoadingProfile = !profile;
    const isProfileLoaded = !isLoadingProfile;
    const hasPendingRoleAssignation = !role;

    const dispatch = useDispatch();

    // profile and token validation
    useEffect(() => {
        dispatch(clearAuth());
        dispatch(clearUI());

        dispatch(emailHasProfile(email)).then(profileFound => {
            if (profileFound) {
                setHasProfile(true);
            } else {
                dispatch(hasValidCreateAccountToken({ email, token })).then(isValid => {
                    if (isValid) {
                        setCanCreateAccount(true);
                    } else {
                        setTokenHasExpired(true);
                    }
                });
            }
        });

        // eslint-disable-next-line
    }, []);

    // check password repeat validation
    useEffect(() => {
        const verifyPasswordTimeout = setTimeout(() => {
            if (password && passwordRepeat) {
                if (password !== passwordRepeat) {
                    setPasswordRepeatError('La confirmación de contraseña no coincide.');
                } else {
                    setPasswordRepeatError();
                }
            }
        }, 750);

        return () => {
            clearTimeout(verifyPasswordTimeout);
        };

        // eslint-disable-next-line
    }, [password, passwordRepeat]);

    const handleOnSubmit = e => {
        e.preventDefault();

        setIsProcessingForm(true);
        dispatch(createUser(email, password, token))
            .then(() => {})
            .finally(() => {
                if (!isLoggedIn) {
                    setIsProcessingForm(false);
                }
            });
    };

    const formIsValid = () => {
        return validateSetAccount({
            password,
            passwordRepeat,
            policiesAccepted,
            reCaptchaToken,
        });
    };

    const onReCaptchaChange = tokenValue => {
        setReCaptchaToken(tokenValue);

        if (isProduction() && !tokenValue) {
            setReCaptchaErrorLabel('Por favor verifica que no eres un robot.');
        } else {
            setReCaptchaErrorLabel('');
        }
    };

    // redirect if logged or has email has profile already created
    if (hasProfile) {
        return <Redirect to="/" />;
    }

    // login status validation
    if (isLoggedIn && isProfileLoaded && hasPendingRoleAssignation) {
        return <Redirect to="/preparar-sesion" />; // redirect to prepare session
    }

    return (
        <>
            <Row className="flex-column flex-md-row min-vh-100 no-gutters align-items-stretch bg-app-light-gray">
                <Col className="col-12 col-md-6 bg-primary pr-0 pr-md-5 text-center text-md-left">
                    {/* todo : Custom Size Icons */}
                    <StyledBookImg src="/img/icons/general/book-white.svg" alt="" className="pr-0 pr-md-5" />
                </Col>
                <Col className="col-12 col-md-6">
                    <div className="d-flex flex-column justify-content-between h-100">
                        {/* top login btn */}
                        <div className="d-flex justify-content-center justify-content-md-end pt-5 pt-md-4 pr-0 pr-md-4 mb-5 mb-md-5">
                            <Link to="/">
                                <Button label="Iniciar sesión" className="btn-danger" size="xs" />
                            </Link>
                        </div>

                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center h-100 px-3">
                            {/* login form */}
                            <RenderIf isTrue={!!canCreateAccount}>
                                <Card backgroundColor="white" className="sm p-4">
                                    <h1 className="text-app-gray text-uppercase text-center letter-spacing-0 app-font-24 mb-5 font-weight-bold">
                                        Configura tus accesos
                                    </h1>

                                    <Form noValidate onSubmit={e => handleOnSubmit(e)}>
                                        {/* password */}
                                        <Input label="Correo" type="email" value={email} required disabled />

                                        {/* password */}
                                        <Input
                                            label="Contraseña"
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />

                                        {/* password repeat */}
                                        <Input
                                            label="Repetir contraseña"
                                            type="password"
                                            value={passwordRepeat}
                                            error={passwordRepeatError}
                                            onChange={e => setPasswordRepeat(e.target.value)}
                                            required
                                        />

                                        {/* re-captcha */}
                                        <div className="mb-4">
                                            <ReCaptcha
                                                siteKey={getReCaptchaApiKey()}
                                                ref={reCaptchaRef}
                                                error={reCaptchaErrorLabel}
                                                onChange={tokenValue => onReCaptchaChange(tokenValue)}
                                                className="m-auto"
                                            />
                                        </div>

                                        {/* checkbox policies */}
                                        <Checkbox
                                            id="formPoliciesCheckbox"
                                            checked={policiesAccepted}
                                            label="Acepto las políticas de privacidad"
                                            onClick={checked => setPoliciesAccepted(checked)}
                                        />

                                        {/* submit */}
                                        <div className="text-center mb-3">
                                            <Button
                                                label="Enviar"
                                                variant="app-blue"
                                                type="submit"
                                                disabled={!formIsValid() || isProcessingForm}
                                            />
                                        </div>
                                    </Form>
                                </Card>
                            </RenderIf>

                            {/* loading */}
                            <RenderIf isTrue={!canCreateAccount && !tokenHasExpired}>
                                <div className="d-flex justify-content-center">
                                    <Spinner size="x-small" />
                                </div>
                            </RenderIf>

                            {/* token expired */}
                            <RenderIf isTrue={tokenHasExpired}>
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="mb-2">El enlace ha expirado.</div>
                                </div>
                            </RenderIf>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

SetPasswordPage.propTypes = {
    auth: PropTypes.any,
    isLoggedIn: PropTypes.any,
    email: PropTypes.string,
    token: PropTypes.string,
};

SetPasswordPage.defaultProps = {
    auth: undefined,
    isLoggedIn: undefined,
    email: undefined,
    token: undefined,
};

const mapStateToProps = (state, { match }) => ({
    auth: state.auth,
    isLoggedIn: state.firebase.auth.uid && state.auth.profile,
    email: match.params && match.params.email,
    token: match.params && match.params.token,
});

const firestoreQuery = () => {
    const fsQuery = [];
    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(SetPasswordPage);
