import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPiGVUrs4MiiYCHKkuWyMjfm_2sBbLm0c",
    authDomain: "proyecto-react-839d9.firebaseapp.com",
    projectId: "proyecto-react-839d9",
    storageBucket: "proyecto-react-839d9.appspot.com",
    messagingSenderId: "307213676730",
    appId: "1:307213676730:web:e8b058618291b0068b5283"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
