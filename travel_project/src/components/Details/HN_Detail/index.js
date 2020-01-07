import React, { Component } from 'react';
import { withAuthorization } from '../../Session';

import { withFirebase } from '../../Firebase';
import Black_Background from "../../Img/black-background.jpg"
import HaNoi from '../../Img/Destination/HaNoi.jpg'
import NhaTrang from '../../Img/Destination/NhaTrang.jpg'
import DaLat from '../../Img/Destination/DaLat.jpg'
import VungTau from '../../Img/Destination/VungTau.jpg'
import styled from 'styled-components'

import { Carousel, Button } from 'react-bootstrap'
import * as ROUTES from '../../../constants/routes';


const Style = styled.div`
    .Sumary{
    }
    .Imgbackground{
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

class HN_Detail extends React.Component {
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
        this.props.firebase.blogs('ha_noi').child(this.id).once('value', snapshot => {
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
            <div>
                <h1>Title: {this.state.title}</h1>
                <h2>Blog Id:{this.id}</h2>
                <h3>Content: {this.state.content}</h3>
            </div>
        );
    }
}

export default withFirebase(HN_Detail);
