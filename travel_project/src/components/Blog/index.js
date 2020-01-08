import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AuthUserContext } from '../Session'
import styled from 'styled-components'
import Background from '../Img/home-background.jpg'
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';


const Style = styled.div`
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

const INITITAL_STATE = {
    title: '',
    content: '',
    destination: 'vung_tau',
}

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITITAL_STATE};
        this.titleinput = React.createRef()
        this.contentinput = React.createRef()
        this.destinationinput = React.createRef()

        this.submit = this.submit.bind(this);
    }

    render() {
        const {
            title,
            content,
            destination,
        } = this.state;
        return (
            <Style>
                <div className="Imgbackground">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Form className="ml-5 bg-light mr-5 pl-5 pr-5" >

                        <center><h2>Up blog</h2></center>


                        <div className="mb-3 mt-3">
                            <Form.Group controlId="Title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Input your title here" ref={this.titleinput} onChange={() => this.takeTitle()} />
                            </Form.Group>
                        </div>

                        <div className="mb-3 mt-3">
                            <Form.Group controlId="Destination" >
                                <Form.Label>Choose the destination you want to review</Form.Label>
                                <Form.Control as="select" onChange={this.takeDestinationValue} ref={this.destinationinput} onChange={() => this.takeDestinationValue()}>
                                    <option value={"vung_tau"}>Vũng Tàu</option>
                                    <option value={"ha_noi"}>Hà Nội</option>
                                    <option value={"nha_trang"}>Nha Trang</option>
                                    <option value={"da_lat"}>Đà Lạt</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="mb-3 mt-3">
                            <Form.Group controlId="Textarea">
                                <Form.Label>Detail</Form.Label>
                                <Form.Control as="textarea" rows="8" placeholder="Input your content here" ref={this.contentinput} onChange={() => this.takeContent()} />
                            </Form.Group>
                        </div>
                        <center>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 1 }}>
                                    <Button type="button" onClick={this.submit}>OK</Button>
                                </Col>
                            </Form.Group>
                        </center>
                    </Form>
                </div>
            </Style>
        );
    }

    takeTitle() {
        this.state.title = this.titleinput.current.value;
    }

    takeContent() {
        this.state.content = this.contentinput.current.value;
    }

    takeDestinationValue() {
        this.state.destination = this.destinationinput.current.value;
    }


    submit = event => {
        const { title, content, destination } = this.state;

        if ((title!=="") || (content!==""))
        {
            alert("Up blog successfully");
            this.props.firebase.blog(destination).push({
                title: title,
                content: content,
                likes: 0
            });
    
            this.setState({...INITITAL_STATE});
        }
        else{
            alert("Please fill in the blank then press ok");
        }
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
}

export default withFirebase(Blog);