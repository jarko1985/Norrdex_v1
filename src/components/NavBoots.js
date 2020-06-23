import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logos/logo.jpg';

const NavBoots = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <img
          alt=''
          src={logo}
          width='150'
          height='100'
          className='d-inline-block align-top'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link style={{ borderRight: '1px solid #ccc' }} href='/about'>
            About
          </Nav.Link>
          <Nav.Link style={{ borderRight: '1px solid #ccc' }} href='/flights'>
            Flights
          </Nav.Link>
          <Nav.Link style={{ borderRight: '1px solid #ccc' }} href='/hotels'>
            Hotels
          </Nav.Link>
          <Nav.Link style={{ borderRight: '1px solid #ccc' }} href='/tours'>
            Tours
          </Nav.Link>
          <Nav.Link href='/sports'>Sports</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBoots;
