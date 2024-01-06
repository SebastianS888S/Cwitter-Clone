// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNivDJTMb9CajHEPXpTGU21PNYGLbjlxY",
    authDomain: "twitter-coppy.firebaseapp.com",
    projectId: "twitter-coppy",
    storageBucket: "twitter-coppy.appspot.com",
    messagingSenderId: "961212174033",
    appId: "1:961212174033:web:b532bb84797c1439567ff0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

console.log('Firestore instance:', firestore); 

export { auth, firestore, googleProvider };