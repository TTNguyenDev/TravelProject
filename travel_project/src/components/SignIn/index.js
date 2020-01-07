import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import styled from 'styled-components'
import Background from '../Img/signin-background.jpg'
import Logo from '../Img/logo.jpg'
import { Nav } from 'react-bootstrap'

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase'
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

class SignInPage extends Component {
    render() {
        return (
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
                        <SignInForm />
                    </center>
                </div>
            </Style>
        );
    }

}

const INITITAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITITAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

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
                    <h1><font color='red'>SIGN IN</font></h1>
                    <br></br>
                    <span>Email address: </span>
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
                    <br></br>
                    <span>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </span>
                    <input
                        className="ml-5"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <br></br>
                    <div>
                        <div>
                            <br></br>
                            <PasswordForgetLink />
                        </div>

                    </div>

                    <br></br>
                    <button disabled={isInvalid} type="submit" >
                        Sign In
                </button>
                    <br></br>
                    <br></br>
                    <SignUpLink />
                    <br></br>

                    {error && <p>{error.message}</p>}
                </div>
            </form>

        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };