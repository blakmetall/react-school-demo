import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const fbConfig = {
    apiKey: 'AIzaSyDkptNmkd_vukoIbPQ4dzekJR0f0MWQk2o',
    authDomain: 'School Demoformacion-58262.firebaseapp.com',
    databaseURL: 'https://School Demoformacion-58262.firebaseio.com',
    projectId: 'School Demoformacion-58262',
    storageBucket: 'School Demoformacion-58262.appspot.com',
    messagingSenderId: '285128349378',
    appId: '1:285128349378:web:0fcbbc04c9212f4ec00d5b',
    measurementId: 'G-9040R7C33J',
};

const fb = firebase.initializeApp(fbConfig);

export { fb, fbConfig };
