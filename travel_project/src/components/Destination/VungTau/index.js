import React from 'react';
import { withAuthorization } from '../../Session';


import Background from '../../Img/VungTau.jpg'
import promotionImg from '../../Img/promotion.jpg'
import experienceImg from '../../Img/experience.jpg'
import foodanddrink from '../../Img/foodanddrink.jpg'
import tradition from '../../Img/Tradition.jpg'

import { ButtonToolbar, Button, Row, Col } from 'react-bootstrap'

import styled from 'styled-components'


import * as ROUTES from '../../../constants/routes';


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
    .Title{
        text-decoration: underline;
        text-decoration-color: red;
        font-size : 75px;
        font-weight:bold;
    }
    .kindoftravel{
        text-decoration: underline;
        text-decoration-color: red;
        font-size : 50px;
        color: yellow;
        font-weight:bold;
    }
    .resizeImg{
        height: 150px;
        width: 150px;
        border: none;
    }
`;

const VungTau = () => (
    <div>
        <Style>
            <div className="Imgbackground">
                <br></br><br></br><br></br>
                <center className="Title">VŨNG TÀU</center>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <center className="kindoftravel">Category</center>
                <br></br><br></br><br></br>
                <center>
                    <Row className="ml-5 mr-5">
                    <Col>
                            <Button variant="link" href={ROUTES.UPDATELATER}>
                                <img src={tradition} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="link" href={ROUTES.UPDATELATER}>
                                <img src={foodanddrink} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="link" href={ROUTES.VUNGTAUPROMOTION}>
                                <img src={promotionImg} class="resizeImg"></img>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="link" href={ROUTES.VUNGTAUVIEWBLOG}>
                                <img src={experienceImg} class="resizeImg"></img>
                            </Button>
                        </Col>
                    </Row>
                </center>
            </div>
        </Style>

    </div>
);

// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);
export default VungTau;
