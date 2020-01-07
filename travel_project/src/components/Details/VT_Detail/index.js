import React, { Component } from 'react';
import { withAuthorization } from '../../Session';

import { withFirebase } from '../../Firebase';
import Background from "../../Img/Destination/DetailVungTau.jpg"
import styled from 'styled-components'

import { Form, Row, Col } from 'react-bootstrap'
import * as ROUTES from '../../../constants/routes';


const Style = styled.div`
    .Sumary{
    }
    .Imgbackground{
        background-image: url(${Background});  
        width: 100%;
        min-height: 100vh;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        /* Needed to position the navbar */
        position: relative;
    }
    .ResizeForm{
        width:50%;
        -webkit-transform: rotate(+5deg); 
        -moz-transform: rotate(+5deg); 
        border-radius: 56px;
    }
    .resizeInput{
        -webkit-transform: rotate(-5deg); 
        -moz-transform: rotate(-5deg); 
    }
    .ResizeTitle{
        font-size: 50px;
    }
    .ResizeContent{
        font-size: 30px;
    }
    .Title{
        color: red;
        text-decoration: underline;
        text-decoration-color: red;
        font-size : 75px;
        font-weight:bold;
    }
`;

class VT_Detail extends React.Component {
    constructor(props) {
        super(props);
        var ids = this.props.location.pathname.split('/');
        this.id = ids[ids.length-1];
        this.state = {
            loading: false,
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.blogs('vung_tau').child(this.id).once('value', snapshot => {
            const value = snapshot.val();
            this.setState({
                loading: false,
                title: value.title,
                content: value.content
            })
        })  
    }

    componentWillUnmount() {
        this.props.firebase.blogs().off();
    }

    render() {
        return (
            <Style>
            <div className="Imgbackground">
                <br></br>
                <center className="Title">Vũng Tàu</center>
                <br></br>
                <center><h1><font color='yellow'>Detail blog</font></h1></center>

                <br></br>
                <br></br>
                <br></br>
                <center>
                    <Form className="ml-5 bg-light mr-5 pl-5 pr-5 ResizeForm" >
                        <br></br>
                        <br></br>
                        <div className="resizeInput">
                            <Row className="ResizeTitle">
                                <Col>
                                    <font color='red'>{this.state.title}</font>
                                </Col>
                            </Row>
                            <br></br>

                            <br></br>
                            <Row className="ResizeContent">

                                <Col>
                                    {this.state.content}
                                </Col>
                            </Row>
                            <br></br>
                            <br></br>


                        </div>
                    </Form>
                </center>
            </div>
        </Style>
        );
    }
}

export default withFirebase(VT_Detail);
