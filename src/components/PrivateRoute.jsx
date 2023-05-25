// PrivateRoute Component built around react-router.
/*
 A bit similar to PublicRoute, with some differences:
 - Gets currentUser and isLoading from useCurrentUser Context.

 - If !currentUser (== null) AND isLoading = false (user is signed OUT), redirect to the Login page.
 - If currentUser (!= null) AND isLoading = false, (user is signed IN), renders the "children" Component.
 - If isLoading = true, renders a Loading spinner.

 - Prevents users from accessing pages that require them to be signed-in.
 - Used for PRIVATE pages, that REQUIRE the user to be signed-in: Homepage, Settings, etc.
*/

import React from 'react';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import { useCurrentUser } from '../context/currentUser.context';

export const PrivateRoute = ({children}) => {
    // extract currentUser and isLoading from useCurrentUser
    const { currentUser, isLoading } = useCurrentUser();

    // display Loading Spinner if currentUser == null and isLoading = false
    // means that the data is still loading
    if(!currentUser && isLoading){
        return <Spinner animation="border" color='#E65728' />;
    }

    // check if currentUser is actually defined
    /* in other words, if the user's logged-in or not
       since currentProfile gets a value when the user logs in.
    */
   // if not, then navigate to Login page
   if(!currentUser && !isLoading){
        return <Navigate to="/login" />;  // navigate to the Login page
}

   // this condition implies user if signed-IN (currentUser && isLoading = false)
   // otherwise, render the children (wrapped by this Component)
   // ONLY happens when the user is signed-in
   return children;
}
