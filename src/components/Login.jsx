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
import { logInUser } from '../backend/helpers';

export const Login = () => {
    // variables for input fields
    const emailRef = useRef();
    const passwordRef = useRef();

    // state variable for loading
    const [isLoading, setIsLoading] = useState(false); 

    // state variable to display error message
    const [errorMsg, setErrorMsg] = useState('');

    // state variable for success message
    const [successMsg, setSuccessMsg] = useState('');
 
    // state variable to show/hide alert
    const [showAlert, setShowAlert] = useState(false);

    // function to login user
    async function handleLogin(event){
        // disable "Login" Button
        setIsLoading(true);
        
        // use Bootstrap Form's built-in functions to see if the fields are empty or not
        const form = event.currentTarget;
        event.preventDefault();

        // if fields are not entered
        if(!form.checkValidity()){
            // update associated state variables
            setErrorMsg("One or more fields are empty/invalid.");
            setShowAlert(true);

            // enable "Login" Button
            setIsLoading(false);

            return;
        }

        // if all fields are valid, login user
        await logInUser(emailRef.current.value, passwordRef.current.value)
            .then(() => {
                setSuccessMsg('Login successful');
            })
            .catch((error) => {
                // console.log(error)
                setErrorMsg(error);
                setShowAlert(true);

            });

        // enable "Login" Button
        setIsLoading(false);
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

                        {errorMsg && <Alert variant='danger' dismissible onClose={() => setShowAlert(false)}>{errorMsg}</Alert>}

                        {successMsg && <Alert variant='success' dismissible onClose={() => setShowAlert(false)}>{successMsg}</Alert>}

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
                                <Button disabled={isLoading} type='submit' className='btn-app-primary'>Login</Button>
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
