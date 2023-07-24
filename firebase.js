// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAodrAvOheiuxAYUnjR58SThbkI5mGRfzE",
  authDomain: "veggieversion-630eb.firebaseapp.com",
  projectId: "veggieversion-630eb",
  storageBucket: "veggieversion-630eb.appspot.com",
  messagingSenderId: "879205778433",
  appId: "1:879205778433:web:594639cf8f8eb5f8ceec00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
