// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFireStore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA39-f1EY_FRMQgAS90QeCtyqQk0gqgJC4",
    authDomain: "man-adorn.firebaseapp.com",
    projectId: "man-adorn",
    storageBucket: "man-adorn.appspot.com",
    messagingSenderId: "334758099399",
    appId: "1:334758099399:web:10804506c41424768f41e2",
    measurementId: "G-3Y93HZLJ5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()