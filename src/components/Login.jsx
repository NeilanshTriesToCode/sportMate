// Component for the Login page

import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";

import { Link } from 'react-router-dom';

import '../styles/globalStyles.scss';

import logo from '../assets/logo-no-background.png';
import hexaLogo from '../assets/sportmate-high-resolution-logo-color-on-transparent-background.png';

export const Login = () => {
    // variables for input fields
    const emailRef = useRef();
    const passwordRef = useRef();

    // state variable for loading
    const [isLoading, setIsLoading] = useState(false); 

    // state variable to display error message
    const [errorMsg, setErrorMsg] = useState('');
 
    // state variable to show/hide alert
    const [showAlert, setShowAlert] = useState(false);

    // function to login user
    const handleLogin = (event) => {
        // use Bootstrap Form's built-in functions to see if the fields are empty or not
        const form = event.currentTarget;

        // if fields are not entered
        if(!form.checkValidity()){
            event.preventDefault();
 
            // update associated state variables
            setErrorMsg("One or more fields are empty/invalid.");
            setShowAlert(true);
        }
    }

    return (
        <Container fluid className='' style={{height: '100vh'}}>
            <Row className='' style={{minHeight: '100%'}}>
                <Col className='position-relative'>
                    <Row className='mt-3 m-1 position-absolute start-0 top-0'>
                        <Image src={logo}  className='logo-corner'/>
                    </Row>

                    <Row className='position-absolute start-50 top-50 translate-middle'> 
                        <h2 className='text-center'>Welcome back</h2>
                        <p className='text-center'>Enter your details to log in to your acccount.</p>

                        {showAlert && <Alert variant='danger' dismissible onClose={() => setShowAlert(false)}>{errorMsg}</Alert>}

                        <Form noValidate validated={errorMsg ? true : false} onSubmit={handleLogin} className='mx-auto'>
                            <Form.Group id='login-email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type='email' ref={emailRef} placeholder='name@email.com' />
                            </Form.Group>

                            <Form.Group id='login-password' className='mt-4'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type='password' ref={passwordRef} placeholder='password' />
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
                    <Image src={hexaLogo} className='w-75'/>
                </Col>
            </Row>
        </Container>
    )
}
