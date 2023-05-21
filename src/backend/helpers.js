// file containing firebase-related methods

// import firebase-related stuff
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

import { auth, database } from './firebase';

// function to sign UP with email and password
// function returns errorMsg (if any)
export async function signUpUser (username, email, password, contactNumber) {
    let errorMsg = '';

   await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // add user details to firestore
        setDoc(doc(database, 'users', userCredential.user.uid), {
            username: username,
            email: email,
            contact: contactNumber
        }).catch(e => {
            console.log(e);
            errorMsg = 'error occurred';
    
            // return Promise with error message
            return Promise.reject(errorMsg);
        });

        // Request successful
        return Promise.resolve();

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
        // return Promise with error message
        // console.log(errorMsg);
        return Promise.reject(errorMsg);
    });

    
}

// function to ADD user to the database (firestore)
export async function addUser(username, email, contactNumber){
    let errorMsg = '';

    // add user details to the "users" Collection on firebase
    await addDoc(collection(database, 'users'), {
        username: username,
        email: email,
        contact: contactNumber
    }).catch(e => {
        console.log(e);
        errorMsg = 'error occurred';

        // return Promise with error message
        return Promise.reject(errorMsg);
    });

   
}