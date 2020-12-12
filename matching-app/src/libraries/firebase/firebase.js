import firebase from "firebase";

// API credentials
var firebaseConfig = {
    apiKey: "AIzaSyBhNGtVFx1xv5gcttMEoELyH-Dmevhuu3g",
    authDomain: "matchingapp-a4647.firebaseapp.com",
    projectId: "matchingapp-a4647",
    storageBucket: "matchingapp-a4647.appspot.com",
    messagingSenderId: "1024906637874",
    appId: "1:1024906637874:web:32d49c97a58af611a5422b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
export const fs = app.firestore();
export const auth = app.auth();
firebase.analytics();
// export const st = app.storage();
// export const an = firebase.analytics();

// export const st = app.storage();