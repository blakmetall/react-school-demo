import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import store from './store';
import { fb, fbConfig } from './firebase-app';
import App from './app';

const rootEl = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider
                firebase={fb}
                config={fbConfig}
                dispatch={store.dispatch}
                createFirestoreInstance={createFirestoreInstance}
            >
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>,
        rootEl,
    );
};

if (module.hot) {
    module.hot.accept('./app', () => {
        setTimeout(render);
    });
}

render();
