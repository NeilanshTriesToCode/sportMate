// Component for the Login page

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Card, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import '../styles/globalStyles.scss';

export const Login = () => {
    const logo = require('../assets/png/logo-no-background.png');

  return (
    <Card className='mx-auto mt-4 w-50'>
        <Card.Body>
            <Image src={logo} className='logo-corner'/>

            <h2 className='text-center'>Welcome back</h2>

            <p className='text-center'>Log in to your acccount.</p>
 
            <Form className='mx-auto w-50'>
                <Form.Group id='login-email' className='mt-2'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type='email' placeholder='name@email.com' />
                </Form.Group>

                <Form.Group id='login-password' className='mt-4'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type='password' placeholder='password' />
                </Form.Group>

                <div className='d-grid gap-2 mx-auto'>
                    <Button type='submit' className='mt-4 btn-app-primary'>Login</Button>
                </div>
            </Form>
        
            <div className='mt-4 text-center'>New to SportMate? <Link to="/signup">Sign up</Link></div>
        </Card.Body>
    </Card>
  )
}
