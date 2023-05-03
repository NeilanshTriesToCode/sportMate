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

            <Row><h2 className='text-left'>Welcome back!</h2></Row>

            <Row><p>Log in to your acccount.</p></Row>

            <Row>
                <Form>
                    <Form.Group id='login-email' className='mt-2'>
                        <Form.Label>email</Form.Label>
                        <Form.Control required type='email' placeholder='name@email.com' />
                    </Form.Group>

                    <Form.Group id='login-password' className='mt-4'>
                        <Form.Label>password</Form.Label>
                        <Form.Control required type='password' placeholder='password' />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='mt-4'>Login</Button>
                </Form>
            </Row>

            <Row className='mt-4'>
                <div className='text-center'>New to SportMate? <Link to="/signup">Sign up</Link></div>
            </Row>
        </Card.Body>

    </Card>
  )
}
