import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { Spinner } from '..';

function RouteWithLayout({ layout, component, requiresAuth, requiresSessionData, auth, firebase, ...rest }) {
    const { profile, role } = auth;

    const isLoggedIn = firebase && firebase.auth.uid;
    const isWaitingToLoadSession = !profile || !role;

    const fallbackLoadingScreen = () => {
        return (
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <Spinner size="xx-small" />
            </div>
        );
    };

    if (requiresAuth) {
        if (!isLoggedIn) {
            return <Redirect to="/" />;
        }

        if (requiresSessionData && isWaitingToLoadSession) {
            return <Redirect to="/preparar-sesion" />; // redirect if needs session data
        }
    }

    if (layout) {
        return (
            <Route
                {...rest}
                render={props => {
                    return React.createElement(layout, { ...props, component });
                }}
            />
        );
    }

    return (
        <Route
            {...rest}
            render={props => {
                return <Suspense fallback={fallbackLoadingScreen()}>{React.createElement(component, props)}</Suspense>;
            }}
        />
    );
}

RouteWithLayout.propTypes = {
    layout: PropTypes.any,
    component: PropTypes.any,
    requiresAuth: PropTypes.bool,
    requiresSessionData: PropTypes.bool,

    auth: PropTypes.any,
    firebase: PropTypes.any,
};

RouteWithLayout.defaultProps = {
    layout: null,
    component: null,
    requiresAuth: false,
    requiresSessionData: true,

    auth: undefined,
    firebase: undefined,
};

const mapStateToProps = state => ({
    auth: state.auth,
    firebase: state.firebase,
    ui: state.ui,
});

const enhance = compose(connect(mapStateToProps));

export default enhance(RouteWithLayout);
