// file containing firebase-related methods

// import firebase-related stuff
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

import { auth, database } from './firebase';

// function to sign UP with email and password
// function returns errorMsg (if any)
export async function signUpUser (username, email, password, contactNumber) {
    let errorMsg = '';

   createUserWithEmailAndPassword(auth, email, password).then(() => {
        // custom function to add user details to firestore
        errorMsg = addUser(username, email, contactNumber);
        return errorMsg;
    }).catch((error) => {
        // catching different types of errors
        switch(error.code){
            case 'auth/email-already-in-use' : {
                errorMsg = 'Email already exists. Please log in.';
                break;
            }

            case 'auth/weak-password' : {
                errorMsg = 'Weak password. Please use a stronger password.';
                break;
            }

            case 'auth/timeout' : {
                errorMsg = 'Your session timed out. Please try again.';
                break;
            }

            default : {
                errorMsg = 'An unknown error occurred. Please try again.'
            }
        }

        //console.log(errorMsg);
        return errorMsg;
    });

    
}

// function to ADD user to the database (firestore)
export async function addUser(username, email, contactNumber){
    let errorMsg = '';

    addDoc(collection(database, 'users'), {
        username: username,
        email: email,
        contact: contactNumber
    }).catch(e => {
        console.log(e);
        errorMsg = 'error occurred';
    });

    // return error message (empty if no error)
    return errorMsg;
}