import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBysGqzJ3acsFaWEBEKiuo9FvUSNqSlvfA",
  authDomain: "chat-react-83546.firebaseapp.com",
  projectId: "chat-react-83546",
  storageBucket: "chat-react-83546.appspot.com",
  messagingSenderId: "852491535400",
  appId: "1:852491535400:web:91b87de4c571f11b83611d",
  measurementId: "G-PVPM6RLFPP"
});
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebaseApp,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>
);