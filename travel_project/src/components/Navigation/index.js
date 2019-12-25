import React from 'react';
import { Link } from 'react-router-dom';


import Logo from '../Img/logo.jpg'
import NavLink from 'react-bootstrap/NavLink';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
// import SignOut from '../SignOut';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
    </div>
)

const NavigationAuth = () => (
    <div>
        <Navbar justify expand="lg" bg="light" sticky="top" >
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav variant="tabs" className="mr-auto">
                    <Nav.Item>
                        <NavLink href={ROUTES.HOME}><h2 text-colo='red'>Trang chủ</h2></NavLink>
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
                    <NavLink href={ROUTES.ACCOUNT}>Account</NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink href={ROUTES.QUIZ}>Quiz</NavLink>
                </Nav.Item>

                <Nav.Item>
                    <SignOutButton />
                </Nav.Item>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="ml-5 mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

const NavigationNonAuth = () => (
    <Navbar justify expand="lg" bg="light" sticky="top" >
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav variant="tabs" className="mr-auto">
                <Nav.Item>
                    <NavLink href={ROUTES.HOME}><h2 text-colo='red'>Trang chủ</h2></NavLink>
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
                <NavLink href={ROUTES.SIGN_IN}>Đăng nhập</NavLink>
            </Nav.Item>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="ml-5 mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;