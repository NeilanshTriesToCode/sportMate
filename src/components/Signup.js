// Component for the Signup page

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import '../styles/globalStyles.scss';

export const Signup = () => {
  return (
    <Card className='mx-auto mt-4 w-50'>
        <Card.Body>
            <Row><h2 className='text-left'>Create an account</h2></Row>

            <Row>
                <Form>
                    <Form.Group id='signup-name' className='mt-2'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Leo Messi' />
                    </Form.Group>

                    <Form.Group id='signup-email' className='mt-4'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='name@email.com' />
                    </Form.Group>

                    <Form.Group id='signup-phone' className='mt-4'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type='number' placeholder='contact number' />
                    </Form.Group>

                    <Form.Group id='signup-password' className='mt-4'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='password' />
                    </Form.Group>

                    <Form.Group id='signup-confirm-password' className='mt-4'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder='confirm password' />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='mt-4'>Sign Up</Button>
                </Form>
            </Row>

            <Row className='mt-4'>
                <div className='text-center'>Already a member? <Link to="/login">Log in</Link></div>
            </Row>
        </Card.Body>

    </Card>
  )
}
