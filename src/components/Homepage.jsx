// Homepage for the App

import React from 'react';

import { Button } from 'react-bootstrap'; 

import { signOutUser } from '../backend/helpers';

import '../styles/globalStyles.scss';

export const Homepage = () => {
  return (
    <Button type='submit' className='btn-app-primary'>Sign Out</Button>
  );
}
