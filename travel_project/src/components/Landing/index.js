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
import Blink from 'react-blink-text';

import HomePage from '../Home';
import * as ROUTES from '../../constants/routes';



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
    .NavLogo{
    }
    .Navcolor{
        background-color: rgb(0,0,255)
    }
    .Blink-text{
        text-align: center;
    }
`;

const Landing = () => (
    <div>
    
    <Style>
        <div className="Imgbackground">
        <div className="Sumary">
            <Navbar expand="lg">
            <Navbar.Brand href={ROUTES.HOME} component={HomePage} className="Homebuttondesign"><h2>HOME</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown id="basic-nav-dropdown" title={
                <div className="NavLogo">
                    <img src={Logo} alt="Your travel" />
                    
                </div>
            }>
            <div className="Navcolor">
                <NavDropdown.Item href="#action/3.1">Ẩm thực</NavDropdown.Item>
                <NavDropdown.Divider  />
                <NavDropdown.Item href="#action/3.2">Du lịch</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3" >Khuyến mãi</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" >Tin Tức</NavDropdown.Item>
            </div>
            </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>

            <div  className="Blink-text" >
            <Blink color='#01FF70' text="𝓨𝓞𝓤𝓡 𝓣𝓡𝓐𝓥𝓔𝓛"  >
                <h1></h1>
            </Blink>
            <Blink color='#01FF70' text='𝕸𝖆𝖐𝖊 𝖞𝖔𝖚𝖗 𝖒𝖊𝖒𝖔𝖗𝖞 𝖋𝖔𝖗𝖊𝖛𝖊𝖗'>
                <h3></h3>
            </Blink>
            </div>
        </div>
        </div>
        
    </Style>
    </div>
);

export default Landing;