import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AuthUserContext } from '../Session'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
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
            <Navbar.Brand href={ROUTES.HOME} component={HomePage} className="Homebuttondesign"><h2>Trang chủ</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link> 
                <div className="NavLogo">
                    <img src={Logo} alt="Your travel" />
                </div>
            </Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>

            <div  className="Blink-text" >
            <Blink color='#FF851B' text="Your travel"  >
                    <h2></h2>
            </Blink>
            <Blink color='white' text='Make your memory forever' >
            </Blink>
            </div>
        </div>
        </div>
    </Style>

    </div>
);

export default Landing;