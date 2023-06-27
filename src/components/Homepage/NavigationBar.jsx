// Component for NavBar
import React from 'react';

import { Nav, Navbar, Container, Row, Image } from 'react-bootstrap';

import logo from '../../assets/logo-no-background.png';

import '../../styles/globalStyles.scss';

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Row className='mt-3 m-1 position-absolute start-0 top-0'>
            <Image src={logo}  className='logo-corner'/>
          </Row>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">History</Nav.Link>
            <Nav.Link href="">My Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
