// PublicRoute Component built around react-router.
/*
 Works as a simple router, with additional functionalities:
 - Gets currentUser and isLoading from useCurrentUser Context.

 - If !currentUser (== null) AND isLoading = false (user is signed OUT), renders the "children" Component.
 - If currentUser (!= null) AND isLoading = false, (user is signed IN), redirect them to homepage.
 - Else, renders a Loading spinner.

 - Just a clean way or rendering pages.
 - Used for public pages, that don't require the user to be logged-in: Signup, Login, ForgotPassword.
*/

import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import { useCurrentUser } from '../context/currentUser.context';

export const PublicRoute = ({children}) => {
    // extract currentUser and isLoading from useCurrentUser
    const { currentUser, isLoading } = useCurrentUser();

    // display Loading Spinner if currentUser == null and isLoading = false
    // means that the data is still loading
    if(!currentUser && isLoading){
        return <Spinner animation="border" color='#E65728' />;
    }

    /*
     since this Component will only be used for Signup, Login and ForgotPassword,
     we'll only direct them to those pages if they're signed-OUT (check last condition).
     If they're signed in, direct them to Homepage by default.
    */
   if(currentUser && !isLoading){
        return redirect('/');  // redirect to homepage
   }

    // this condition implies user if signed-IN (currentUser && isLoading = false)
   // otherwise, user is signed OUT, so render the children (wrapped by this Component) 
   // In this case, children is ONLY one of Signup, Login or ForgotPassword
   return children;
}
