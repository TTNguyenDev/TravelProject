import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Background from '../Img/home-background.jpg'

import HomePage from '../Home';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
    <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href={ROUTES.HOME} component={HomePage}><h2>HOME</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Logo" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Ẩm thực</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Du lịch</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Khuyến mãi</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Tin Tức</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
    </Navbar>
    <img src={Background} style={{ width: '100%', aspectRatio: 1 }}></img>
    </div>
);

export default Landing;