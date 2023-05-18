// Component for the Signup page

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert, Card, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useRef } from 'react';

import '../styles/globalStyles.scss';

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

    // function to handle Submit Button click
    function handleSubmit(event) {
        // use Bootstrap Form's built-in functions to see if the fields are empty or not
        const form = event.currentTarget;

        // if fields are not entered
        if(!form.checkValidity()){
            event.preventDefault();

            // update associated state variables
            setErrorMsg("One or more fields are empty.");
            setShowAlert(true);

        }

        // check if password and confirm-password match
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            event.preventDefault();

            // update associated state variables
            setErrorMsg("Passwords don't match. Try again.");
            setShowAlert(true);

        }
    }

    return (
        <Card className='mx-auto mt-4 w-50'>
            <Card.Body>
                <Row><h2 className='text-left'>Create an account</h2></Row>

                <Row>{showAlert && <Alert variant='danger' dismissible onClose={() => setShowAlert(false)}>{errorMsg}</Alert>}</Row>

                <Row><p>Get started by creating an account below.</p></Row>

                <Row>
                    <Form noValidate validated={errorMsg} onSubmit={handleSubmit}>
                        <Form.Group id='signup-name' className='mt-2'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type='text' ref={usernameRef} placeholder='Leo Messi' />
                        </Form.Group>

                        <Form.Group id='signup-email' className='mt-4'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type='email' ref={emailRef} placeholder='name@email.com' />
                        </Form.Group>

                        <Form.Group id='signup-phone' className='mt-4'>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control required type='number' ref={contactNumRef} placeholder='contact number' />
                        </Form.Group>

                        <Form.Group id='signup-password' className='mt-4'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type='password' ref={passwordRef} placeholder='password' />
                        </Form.Group>

                        <Form.Group id='signup-confirm-password' className='mt-4'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type='password' ref={confirmPasswordRef} placeholder='confirm password' />
                        </Form.Group>

                        <Button disabled={isLoading}  variant='primary' type='submit' className='mt-4'>Sign Up</Button>
                    </Form>
                </Row>

                <Row className='mt-2'>
                    <div className='text-center'>Already a member? <Link to="/login">Log in</Link></div>
                </Row>
            </Card.Body>

        </Card>
  )
}
