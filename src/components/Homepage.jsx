// Homepage for the App

import React from 'react';

import { Button } from 'react-bootstrap'; 

import { NavigationBar } from './Homepage/NavigationBar'; 

import { signOutUser } from '../backend/helpers';

import '../styles/globalStyles.scss';

export const Homepage = () => {
  return (
    <>
    <NavigationBar />
    <Button type='submit' className='btn-app-primary' onClick={signOutUser}>Sign Out</Button>
    </>
  );
}
