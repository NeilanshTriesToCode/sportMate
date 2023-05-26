// file containing firebase-related methods

// import firebase-related stuff
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

import { auth, database } from './firebase';

// function to sign UP with email and password
// also ADDS user details to the firestore database
// function returns a resolved/rejected Promise
export async function signUpUser (username, email, password, contactNumber) {
    // to return with rejected Promise in case of error
    let errorMsg = '';

    // authenticate user with email and password
   await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // add user details to "users" Collection on firebase
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

// function to LOG IN user
// returns resolved/rejected Promise
export async function logInUser(email, password){
    // to return with rejected Promise in case of error
    let errorMsg = '';

    // login user with email and password
    await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // returned resolved Promise
            return;
        })
        .catch((error) => {
            // catching different types of errors
            switch(error.code){
                case 'auth/user-not-found' : {
                    errorMsg = 'Account doesn\'t exist with this email. Please create an account.';
                    break;
                }

                case 'auth/wrong-password' : {
                    errorMsg = 'Incorrect password. Please try again';
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

// function to sign-out user
export async function signOutUser(){
    // sign-out user using firebase's sign-out method
    signOut(auth).then(() => {
        // console.log('user signed out successfully');
    }).catch((error) => {
        console.log(error.code);
    });
    
}