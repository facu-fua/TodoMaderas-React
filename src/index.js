import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));

// FIREBASE-----------------------------------------------------------

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPtRX6t_L_Qat8yKFF6BF597ou8-QFxtg",
  authDomain: "todomaderas-d645b.firebaseapp.com",
  projectId: "todomaderas-d645b",
  storageBucket: "todomaderas-d645b.appspot.com",
  messagingSenderId: "251244200367",
  appId: "1:251244200367:web:cc898ed10eb440680d6f5a",
  measurementId: "G-97KG2H7W7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//----------------------------------------------------------------

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
