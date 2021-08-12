import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB6gw_7_9VKNE_HtRIap5SxaBG6OE5_jlc",
    authDomain: "proyecto-final-muro-kelvin.firebaseapp.com",
    databaseURL: "https://proyecto-final-muro-kelvin-default-rtdb.firebaseio.com",
    projectId: "proyecto-final-muro-kelvin",
    storageBucket: "proyecto-final-muro-kelvin.appspot.com",
    messagingSenderId: "951455340192",
    appId: "1:951455340192:web:d5de7be8c5dbf751e6dbc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();
  