// Component for the Login page

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import '../styles/globalStyles.scss';

export const Login = () => {
    const logo = require('../assets/png/logo-no-background.png');
    const logo_hexa = require('../assets/png/sportmate-high-resolution-logo-color-on-transparent-background.png');

  return (
   <Row className=' d-flex border border-primary' style={{height: '100vh'}}>
        <Col className=' w-50 mh-100 '>
            <Card className='mx-auto h-75 '>
                <Card.Body>
                    <Image src={logo} className='logo-corner'/>

                    <h2 className='text-center'>Welcome back</h2>

                    <p className='text-center'>Enter your details to log in to your acccount.</p>

                    <Form className='mx-auto w-50'>
                        <Form.Group id='login-email' className='mt-2'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type='email' placeholder='name@email.com' />
                        </Form.Group>

                        <Form.Group id='login-password' className='mt-4'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type='password' placeholder='password' />
                        </Form.Group>

                        <div className='d-grid  mx-auto'>
                            <Button type='submit' className='mt-4 btn-app-primary'>Login</Button>
                        </div>
                    </Form>
            
                    <div className='my-4 text-center'>New to SportMate? <Link to="/signup">Sign up</Link></div>

                    <div className="text-left text-secondary bottom-0 start-0"><p>&copy; SportMate 2023</p></div>
                </Card.Body>
            </Card>
        </Col>

        <Col className='pt-4 w-50 d-flex align-items-center justify-content-center  bg-light'>
            <Image src={logo_hexa} className='w-75'/>
        </Col>
   </Row>
  )
}
