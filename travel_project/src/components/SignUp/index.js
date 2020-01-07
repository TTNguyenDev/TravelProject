import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import styled from 'styled-components'
import Background from '../Img/signup-background.jpg'
import Logo from '../Img/logo.jpg'
import { Nav, Row, Col } from 'react-bootstrap'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


const Style = styled.div`
    .Imgbackground{
        background-image: url(${Background});  
        width: 100%;
        min-height: 100vh;
        

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        
        /* Needed to position the navbar */
        position: relative;
    }
    .resizeForm{
        width: 35%;
        -webkit-transform: rotate(-5deg); 
        -moz-transform: rotate(-5deg); 
        border-radius: 56px;
    }
    .resizeInput{
        -webkit-transform: rotate(+5deg); 
        -moz-transform: rotate(+5deg); 
    }
`;

const SignUpPage = () => (
    <Style>
        <div className="Imgbackground">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <SignUpForm />
            </center>
        </div>
    </Style>
);

const INITITAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITITAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITITAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form onSubmit={this.onSubmit} className="ml-5 bg-light mr-5 pl-5 pr-5 resizeForm">
                <div className="resizeInput">
                    <br></br>
                    <Nav.Link eventKey="disabled" disabled>
                        <div >
                            <img src={Logo} alt="Your travel" />
                        </div>
                    </Nav.Link>
                    <br></br>
                    <h1><font color='red'>SIGN UP</font></h1>
                    <br></br>
                    <span>Full Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        className="ml-5"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                    />
                    <br></br>
                    <br></br>
                    <span>Email Address: </span>
                    <input
                        className="ml-5"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            Password:
                        </Col>
                        <Col>
                            <input
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                        </Col>
                        <Col>
                            <input
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <button disabled={isInvalid} type="submit">
                        Sign Up
                </button>
                    <br></br>
                    <br></br>
                    <font color='red'> {error && <p>{error.message}</p>}</font>
                    <br></br>
                    <br></br>

                </div>
            </form>




        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };