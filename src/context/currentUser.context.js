// File for Current User Context
// responsible for info of the current user

import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {auth, database} from '../database/firebase';

// create Context object
const CurrentUserContext = createContext();

// Provider function for the context
/*
 all (consuming) Components wrapped by this Provider 
 will have access to current user info
 */
export const CurrentUserProvider = ({children}) => {
    // state variables for current user
    const [currentUser, setCurrentUser] = useState(null);

    // state variable for isLoading (to indicate whether the current user data has loaded or not)
    const [isLoading, setIsLoading] = useState(true);

    // useEffect to change the state of "currentUser" when the consuming Component mounts
    useEffect(() => {
        setCurrentUser({
            name: 'Leo Messi',
            email: 'leo@goatmail.com'
        });

        setIsLoading(false);



    }, []);





    return (
        <CurrentUserContext.Provider value={{currentUser, isLoading}}>
            {children}
        </CurrentUserContext.Provider>
    );
}

/* 
 custom-hook to use the useContext() hook for the 
 CurrentUserContext context created at the top
*/
export const useCurrentUser = () => useContext(CurrentUserContext);

