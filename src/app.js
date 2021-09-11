import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { loadUserProfile } from './store/actions/session';
import { ThemeWrapper } from './components';
// eslint-disable-next-line
import AppRoutes from './routes';
import store from './store';

function App() {
    const firebase = useFirebase();
    const dispatch = useDispatch();

    // session management on init
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(loadUserProfile({ authId: user.uid }));
        } else {
            return <Redirect to="/salir" />;
        }
    });

    return (
        <Provider store={store}>
            <ThemeWrapper>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ThemeWrapper>
        </Provider>
    );
}

export default App;
