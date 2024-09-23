import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCdWOqssDb8_x6OF22kmqd83vZgNmgCDLc",
  authDomain: "rincon-coleccionista.firebaseapp.com",
  databaseURL: "https://rincon-coleccionista-default-rtdb.firebaseio.com",
  projectId: "rincon-coleccionista",
  storageBucket: "rincon-coleccionista.appspot.com",
  messagingSenderId: "879091734626",
  appId: "1:879091734626:web:8800bf6e8f3d669ead993b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
