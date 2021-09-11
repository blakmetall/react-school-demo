import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spinner } from '../../../components';
import { signOut, clearAuth } from '../../../store/actions/auth';
import { clearUI } from '../../../store/actions/ui';
import store from '../../../store';

const LogoutPage = ({ auth, firebase }) => {
    store.dispatch(signOut());

    const isLoggedIn = auth.profile && firebase && firebase.auth && firebase.auth.uid;

    useEffect(() => {
        return () => {
            store.dispatch(clearAuth());
            store.dispatch(clearUI());
        };
    }, []);

    if (!isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className="vw-100 vh-100">
            <Spinner />
        </div>
    );
};
LogoutPage.propTypes = {
    auth: PropTypes.any,
    firebase: PropTypes.any,
};

LogoutPage.defaultProps = {
    auth: undefined,
    firebase: undefined,
};

const mapStateToProps = state => ({
    auth: state.auth,
    firebase: state.firebase,
});

export default connect(mapStateToProps)(LogoutPage);
