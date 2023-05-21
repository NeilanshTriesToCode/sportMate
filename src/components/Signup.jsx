// Component for the Signup page

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Alert, Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useRef } from 'react';

import '../styles/globalStyles.scss';

import { useCurrentUser } from '../context/currentUser.context';
import { signUpUser } from '../backend/helpers';

import logo from '../assets/logo-no-background.png';
import hexaLogo from '../assets/sportmate-high-resolution-logo-color-on-transparent-background.png';

export const Signup = () => {
    // variables for input fields
    const usernameRef = useRef();
    const emailRef = useRef();
    const contactNumRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    // state variable for loading
    const [isLoading, setIsLoading] = useState(false); 

    // state variable to display error message
    const [errorMsg, setErrorMsg] = useState('');

    // state variable to show/hide alert
    const [showAlert, setShowAlert] = useState(false);

    // get current user from context
    const { currentUser } = useCurrentUser();

    // function to handle Submit Button click
    async function handleSignUp(event) {
        // use Bootstrap Form's built-in functions to see if the fields are empty or not
        const form = event.currentTarget;
        event.preventDefault();


        // if fields are not entered
        if(!form.checkValidity()){
            //event.preventDefault();

            // update associated state variables
            setErrorMsg("One or more fields are empty/invalid.");
            setShowAlert(true);

            return;
        }

        // check if password and confirm-password match
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            //event.preventDefault();

            // update associated state variables
            setErrorMsg("Passwords don't match. Try again.");
            setShowAlert(true);

            return;
        }

        // if the fields are valid, sign up the user w/ email and password
        await signUpUser(usernameRef.current.value, emailRef.current.value, passwordRef.current.value, contactNumRef.current.value);
            
    }

    return (
        <Container fluid className='' style={{height: '100vh'}}>
            <Row className='' style={{minHeight: '100%'}}>
                <Col className='position-relative'>
                    <Row className='mt-3 m-1 position-absolute start-0 top-0'>
                        <Image src={logo}  className='logo-corner'/>
                    </Row>

                    <Row className='position-absolute start-50 top-50 translate-middle'> 
                        <h2 className='text-left'>Create an account</h2>

                        {showAlert && <Alert variant='danger' dismissible onClose={() => setShowAlert(false)}>{errorMsg}</Alert>}

                        <p>{currentUser ? currentUser.email : ''}</p> 

                        <Form noValidate validated={errorMsg? true : false} onSubmit={handleSignUp} className='mx-auto'>
                            <Form.Group id='signup-name' className='mt-2'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type='text' ref={usernameRef} placeholder='Leo Messi' />
                            </Form.Group>

                            <Form.Group id='signup-email' className='mt-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type='email' ref={emailRef} placeholder='name@email.com' />
                            </Form.Group>

                            <Form.Group id='signup-phone' className='mt-3'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control required type='number' ref={contactNumRef} placeholder='contact number' />
                            </Form.Group>

                            <Form.Group id='signup-password' className='mt-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type='password' ref={passwordRef} placeholder='password' />
                            </Form.Group>

                            <Form.Group id='signup-confirm-password' className='mt-3'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control required type='password' ref={confirmPasswordRef} placeholder='confirm password' />
                            </Form.Group>

                            <div className='mt-3 d-grid  mx-auto'>
                                <Button disabled={isLoading}  type='submit' className='btn-app-primary'>Sign Up</Button>
                                <Button variant="outline-secondary fw-bold" className='mt-3'><FcGoogle size={24} />&nbsp;Sign in with Google</Button>
                            </div>
                        </Form>

                        <p className='mt-3 text-center'>Already a member? <Link to="/login">Log in</Link></p>
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
