// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB80DXB_ddnpq1FQLDij9GofTCkmI2b0OI",
  authDomain: "challenge-84584.firebaseapp.com",
  projectId: "challenge-84584",
  storageBucket: "challenge-84584.appspot.com",
  messagingSenderId: "126436400555",
  appId: "1:126436400555:web:706d9085c5a9dbc881c6ee",
  measurementId: "G-YSS7VSDWQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
