import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Background from '../Img/home-background.jpg'
import Black_Background from "../Img/black-background.jpg"
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

    .Imgbackground1{
        background-image: url(${Black_Background});  
        width: 100%;
        height:100vh;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        /* Needed to position the navbar */
        position: relative;
    }
`;


const Home = () => (
  <div>
    
  <Style>
        <Navbar justify expand="lg" bg="light" sticky="top" >
        <Navbar.Collapse id="basic-navbar-nav" >
        <Nav variant="tabs" className="mr-auto">
        <Nav.Item>
            <NavLink href={ROUTES.HOME} component={HomePage}><h2 text-colo='red'>Trang chủ</h2></NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink><h2>Ẩm thực</h2></NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink><h2>Du lịch</h2></NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink><h2>Khuyến mãi</h2></NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink><h2>Tin Tức</h2></NavLink>.
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
     
      <div className="Imgbackground">
      </div>
      
      <div className="Imgbackground1">
     
      </div>

  </Style>
  </div>
);

export default Home;