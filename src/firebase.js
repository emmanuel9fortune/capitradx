


// const firebaseConfig = {
//   apiKey: "AIzaSyA2bJGkRWLEwyYigJ4sn6GmlSsdJr2HnKc",
//   authDomain: "abitradex.firebaseapp.com",
//   projectId: "abitradex",
//   storageBucket: "abitradex.appspot.com",
//   messagingSenderId: "16225784237",
//   appId: "1:16225784237:web:89d83ded3e576914285124",
//   measurementId: "G-0SGY6GLREK"
// };


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import {getStorage} from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqfoPxPxGg1aNLo0ar6Fl1yAQ1wWKxeT4",
  authDomain: "atrivas-ledger.firebaseapp.com",
  projectId: "atrivas-ledger",
  storageBucket: "atrivas-ledger.firebasestorage.app",
  messagingSenderId: "884836587416",
  appId: "1:884836587416:web:64806faa7c652a80e83ded",
  measurementId: "G-XQE8EGM4Z5"
};

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()

export  const auth = app.auth()

export const storage = getStorage(app)

export const dbauth = getAuth(app)

export const Provider = new firebase.auth.GoogleAuthProvider()


const apk = firebase.initializeApp(firebaseConfig)

export default apk