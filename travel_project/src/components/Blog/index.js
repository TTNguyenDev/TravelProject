import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AuthUserContext } from '../Session'
import styled from 'styled-components'
import Background from '../Img/home-background.jpg'

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

class Blog extends React.Component {
    constructor() {
        super();
        this.state = {  title: "", content: "" , destination: "Vũng Tàu"};
        this.titleinput = React.createRef()
        this.contentinput = React.createRef()
        this.destinationinput = React.createRef()
       
        this.submit = this.submit.bind(this);
    }

    render() {
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
                        <Form.Control type="text" placeholder="Input your title here" ref={this.titleinput} onChange={() => this.takeTitle()}/>
                    </Form.Group>
                </div>

                <div className="mb-3 mt-3">
                    <Form.Group controlId="Destination" >
                        <Form.Label>Choose the destination you want to review</Form.Label>
                        <Form.Control as="select" onChange={this.takeDestinationValue} ref={this.destinationinput} onChange={() => this.takeDestinationValue()}>
                            <option value={"Vũng Tàu"}>Vũng Tàu</option>
                            <option value={"Mũi Né"}>Mũi Né</option>
                            <option value={"Hà Nội"}>Hà Nội</option>
                            <option value={"Sa Pa"}>Sa Pa</option>
                            <option value={"Hội An"}>Hội An</option>
                            <option value={"Cà Mau"}>Cà Mau</option>
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

    takeTitle(){
        this.state.title=this.titleinput.current.value;
    }

    takeContent(){
        this.state.content=this.contentinput.current.value;
    }

    takeDestinationValue(){
        this.state.destination=this.destinationinput.current.value;
    }


    submit() {
        console.log("Title: ")
        console.log(this.state.title)
        
        console.log("Content: ")
        console.log(this.state.content)

        console.log("Destination: ")
        console.log(this.state.destination)
    }
}

export default Blog;