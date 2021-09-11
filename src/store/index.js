import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { firebaseReducer, getFirebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { save, load } from 'redux-localstorage-simple';
import { authReducer, notificationsReducer, uiReducer } from './reducers';

const middlewares = [thunk.withExtraArgument(getFirebase), save()];

const reducers = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    notifications: notificationsReducer,

    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithLocalStorageMiddleware = composeEnhancer(applyMiddleware(...middlewares))(createStore);

const store = createStoreWithLocalStorageMiddleware(reducers, load());

export default store;
