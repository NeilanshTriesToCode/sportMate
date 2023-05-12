// Component for the Login page

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";

import { Link } from 'react-router-dom';

import '../styles/globalStyles.scss';

export const Login = () => {
    const logo = require('../assets/png/logo-no-background.png');
    const logo_hexa = require('../assets/png/sportmate-high-resolution-logo-color-on-transparent-background.png');

  return (
    <Container fluid className='' style={{height: '100vh'}}>
        <Row className='' style={{minHeight: '100%'}}>
            <Col className='position-relative'>
                <Row className='mt-3 m-1 position-absolute start-0 top-0'><Image src={logo} className='logo-corner'/></Row>

                <Row className='position-absolute start-50 top-50 translate-middle'> 
                    <h2 className='text-center'>Welcome back</h2>
                    <p className='text-center'>Enter your details to log in to your acccount.</p>

                    <Form className='mx-auto'>
                        <Form.Group id='login-email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type='email' placeholder='name@email.com' />
                        </Form.Group>

                        <Form.Group id='login-password' className='mt-4'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type='password' placeholder='password' />
                        </Form.Group>

                        <p className='mt-2 text-end fw-bold text-primary-color'><Link>Forgot Password?</Link></p>

                        <div className='mt-2 d-grid  mx-auto'>
                            <Button type='submit' className='btn-app-primary'>Login</Button>
                            <Button variant="outline-secondary fw-bold" className='mt-3'><FcGoogle size={24} />&nbsp;Sign in with Google</Button>
                        </div>
                    </Form>

                    <p className='mt-3 text-center'>New to SportMate? <Link to="/signup">Sign up</Link></p>
                </Row>
                
                <Row className="m-1 position-absolute start-0 bottom-0 text-start text-secondary"><p>&copy; SportMate 2023</p></Row>
            </Col>

            <Col className=' d-flex align-items-center justify-content-center bg-light'>
                <Image src={logo_hexa} className='w-75'/>
            </Col>
        </Row>
    </Container>
  )
}
