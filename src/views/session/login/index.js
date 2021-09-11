import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { ReCaptcha } from 'react-rainbow-components';
import { connect, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';
import { Button, Card, Divider, RenderIf, Checkbox, Input, Spinner } from '../../../components';
import { getAfterSuccessLoginUrl, getReCaptchaApiKey, isProduction } from '../../../helpers';
import { validateLogin } from './helpers';
import { clearAuth, signIn } from '../../../store/actions/auth';
import { loadUserProfile } from '../../../store/actions/session';
import { clearUI } from '../../../store/actions/ui';
import { StyledBookImg } from './styled';

const LoginPage = ({ auth, authId, isLoggedIn }) => {
    const { profile, role } = auth;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [policiesAccepted, setPoliciesAccepted] = useState(false);

    const [reCaptchaToken, setReCaptchaToken] = useState();
    const [reCaptchaErrorLabel, setReCaptchaErrorLabel] = useState();
    const reCaptchaRef = useRef();
    const reCaptchaApiKey = getReCaptchaApiKey() || '';

    const [hasLoginError, setHasLoginError] = useState(false);
    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const isLoadingProfile = !profile;
    const isProfileLoaded = !isLoadingProfile;
    const hasPendingRoleAssignation = !role;
    const isRoleLoaded = !hasPendingRoleAssignation;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearAuth());
        dispatch(clearUI());

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (authId) {
            dispatch(loadUserProfile({ authId }));
        }

        // eslint-disable-next-line
    }, [authId]);

    // reCaptcha handler
    const onReCaptchaChange = token => {
        setReCaptchaToken(token);

        if (isProduction() && !token) {
            setReCaptchaErrorLabel('Por favor verifica que no eres un robot.');
        } else {
            setReCaptchaErrorLabel('');
        }
    };

    // signIn
    const handleOnSubmit = e => {
        e.preventDefault();

        setIsProcessingForm(true);
        dispatch(signIn({ email, password }))
            .then(() => setHasLoginError(false))
            .catch(() => setHasLoginError(true))
            .finally(() => setIsProcessingForm(false));
    };

    // validations
    const formIsValid = () => {
        return validateLogin({
            email,
            password,
            policiesAccepted,
            reCaptchaToken,
        });
    };

    // login status validation
    if (isLoggedIn) {
        // show spinner if loading profile
        if (isLoadingProfile) {
            return (
                <div className="vw-100 vh-100">
                    <Spinner />
                </div>
            );
        }

        if (isProfileLoaded) {
            if (hasPendingRoleAssignation) {
                return <Redirect to="/preparar-sesion" />; // redirect to prepare session
            }

            if (isRoleLoaded) {
                return <Redirect to={getAfterSuccessLoginUrl(role.slug)} />; // redirect user dashboard
            }
        }
    }

    return (
        <>
            <Row className="flex-column flex-md-row min-vh-100 no-gutters align-items-stretch bg-app-light-gray">
                <Col className="col-12 col-md-6 bg-primary pr-0 pr-md-5 text-center text-md-left">
                    {/* todo : Custom Size */}
                    <StyledBookImg src="/img/icons/general/book-white.svg" alt="" className="pr-0 pr-md-6" />
                </Col>
                <Col className="col-12 col-md-6">
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center h-100 pl-3 pr-3">
                        <Divider size="xl" />

                        {/* login form */}
                        <Card backgroundColor="white" className="sm p-4">
                            <h3 className="text-app-gray text-uppercase text-center letter-spacing-0 app-font-28 mb-4 font-weight-bold">
                                Inicio de sesión
                            </h3>

                            <Form noValidate onSubmit={e => handleOnSubmit(e)}>
                                {/* email */}
                                <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} required />

                                {/* password */}
                                <Input
                                    label="Contraseña"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />

                                {/* forgot password link */}
                                <Link to="/password-forgot" className="text-green text-center d-block mb-3">
                                    ¿Olvidaste tu contraseña?
                                </Link>

                                {/* re-captcha */}
                                <div className="mb-4">
                                    <ReCaptcha
                                        siteKey={reCaptchaApiKey}
                                        ref={reCaptchaRef}
                                        error={reCaptchaErrorLabel}
                                        onChange={token => onReCaptchaChange(token)}
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
                                        label="Ingresar"
                                        variant="app-blue"
                                        type="submit"
                                        disabled={!formIsValid() || isProcessingForm}
                                    />
                                </div>

                                {/* login error */}
                                <RenderIf isTrue={hasLoginError}>
                                    <div className="text-danger text-center">Las credenciales que ingresaste no son válidas.</div>
                                </RenderIf>
                            </Form>
                        </Card>

                        <Divider size="xl" />
                    </div>
                </Col>
            </Row>
        </>
    );
};

LoginPage.propTypes = {
    auth: PropTypes.any,
    authId: PropTypes.any,
    isLoggedIn: PropTypes.any,
};

LoginPage.defaultProps = {
    auth: undefined,
    authId: undefined,
    isLoggedIn: undefined,
};

const mapStateToProps = state => ({
    auth: state.auth,
    authId: state.firebase.auth.uid,
    isLoggedIn: state.firebase.auth.uid && state.auth.profile,
});

const enhance = compose(connect(mapStateToProps));

export default enhance(LoginPage);
