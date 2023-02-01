// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.DEV_PLANNER_FIREBASE_APIKEY,
    authDomain: process.env.DEV_PLANNER_FIREBASE_DOMAIN,
    projectId: process.env.DEV_PLANNER_FIREBASE_PROJECT_ID,
    storageBucket: process.env.DEV_PLANNER_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.DEV_PLANNER_FIREBASE_SENDER_ID,
    appId: process.env.DEV_PLANNER_FIREBASE_APP_ID,
    measurementId: process.env.DEV_PLANNER_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


    // apiKey: process.env.DEV_PLANNER_FIREBASE_APIKEY,
    // authDomain: process.env.DEV_PLANNER_FIREBASE_DOMAIN,
    // projectId: process.env.DEV_PLANNER_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.DEV_PLANNER_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.DEV_PLANNER_FIREBASE_SENDER_ID,
    // appId: process.env.DEV_PLANNER_FIREBASE_APP_ID,
    // measurementId: process.env.DEV_PLANNER_FIREBASE_MEASUREMENT_ID
