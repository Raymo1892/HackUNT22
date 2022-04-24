// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgfpejg1S07pDLAJwawH0443K_i7AxsEI",
    authDomain: "hackunt-4913d.firebaseapp.com",
    projectId: "hackunt-4913d",
    storageBucket: "hackunt-4913d.appspot.com",
    messagingSenderId: "79307449484",
    appId: "1:79307449484:web:1ecb6ec85c7f65f4c907a9",
    measurementId: "G-JDC0JY806T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }

export const auth = getAuth(app);
