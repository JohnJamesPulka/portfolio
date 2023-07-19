// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = firebase.firestore();

export { firebase, firestore };
