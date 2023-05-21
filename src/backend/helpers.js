// file containing firebase-related methods

// import firebase-related stuff
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';

import { auth, database } from './firebase';

// function to sign UP with email and password
// and add user details to DB
// function returns errorMsg (if any)
export const signUpUser = async (username, email, password, contactNumber) => {
    console.log(username);

   createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    console.log('created.');
   }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
});

}