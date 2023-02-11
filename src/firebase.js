import firebase from "firebase/app";
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDC3ZrGqQMy2HZnu1WtYMGns37CuCRpKO4",
    authDomain: "kentrochat.firebaseapp.com",
    projectId: "kentrochat",
    storageBucket: "kentrochat.appspot.com",
    messagingSenderId: "461409340178",
    appId: "1:461409340178:web:8f343ac87cbcc5115a81cb",
    measurementId: "G-QKFR84B4DW"
  }).auth();