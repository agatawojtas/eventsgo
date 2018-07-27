import firebase from "firebase";

var config = {
    apiKey: "AIzaSyBbEGKi3ZLeQ0HIZzYbHw3W6BdErHVPx7I",
    authDomain: "eventsgo-45c95.firebaseapp.com",
    databaseURL: "https://eventsgo-45c95.firebaseio.com",
    projectId: "eventsgo-45c95",
    storageBucket: "eventsgo-45c95.appspot.com",
    messagingSenderId: "608829271"
};
firebase.initializeApp(config);

export default firebase;
