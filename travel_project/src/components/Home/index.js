import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Background from '../Img/home-background.jpg'
import Logo from '../Img/logo.jpg'
import styled from 'styled-components'


import HomePage from '../Home';
import * as ROUTES from '../../constants/routes';
import NavLink from 'react-bootstrap/NavLink';

const Style= styled.div`
    .Sumary{
    }
    .Imgbackground{
        background-image: url(${Background});  
        width: 100%;
        height:100vh;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        /* Needed to position the navbar */
        position: relative;
    }
    .Homebuttondesign{
        color: red
    }
    .Navlinkdesign{
        
    }

`;


const Home = () => (
  <div>
    
  <Style>
      
      <div className="Sumary">
          <Navbar justify expand="lg" bg="light" sticky-top>
          <Navbar.Brand href={ROUTES.HOME} component={HomePage} className="Homebuttondesign"><h1>Trang chủ</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="mr-auto">
          <Nav.Item>
                <NavLink><h1>Ẩm thực</h1></NavLink>
          </Nav.Item>
          <Nav.Item>
                <NavLink><h1>Du lịch</h1></NavLink>
          </Nav.Item>
          <Nav.Item>
                <NavLink><h1>Khuyến mãi</h1></NavLink>
          </Nav.Item>
          <Nav.Item>
                <NavLink><h1>Tin Tức</h1></NavLink>.
          </Nav.Item>
          <Nav.Link eventKey="disabled" disabled> 
                <div >
                    <img src={Logo} alt="Your travel" />
                </div>
            </Nav.Link>
          </Nav>
          <Nav.Item>
                <NavLink>Đăng nhập</NavLink>
          </Nav.Item>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
          </Navbar>
      </div>
      <div className="Imgbackground">
      </div>

  </Style>
  </div>
);

export default Home;