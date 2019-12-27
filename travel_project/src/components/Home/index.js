import React from 'react';
import { withAuthorization } from '../Session';


import Black_Background from "../Img/black-background.jpg"
import HaNoi from '../Img/Destination/HaNoi.jpg'
import NhaTrang from '../Img/Destination/NhaTrang.jpg'
import DaLat from '../Img/Destination/DaLat.jpg'
import VungTau from '../Img/Destination/VungTau.jpg'
import styled from 'styled-components'

import { Carousel, Button } from 'react-bootstrap'


import * as ROUTES from '../../constants/routes';


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
    .Title{
        color: white;
        text-decoration: underline overline;
        text-decoration-color: yellow;
        font-size : 75px;
        font-weight:bold;
    }
    .resizeImg{
        width: 80vh;
        height: 50vh;
    }
`;


class Home extends React.Component {
    render() {
        return (
            <div>

                <Style>

                    <div className="Imgbackground">
                        <br></br><br></br><br></br>
                        <center className="Title">Highlighted Places</center>


                        <Carousel>
                            <Carousel.Item>
                                <Button variant="link" href={ROUTES.DALAT} className="d-block">
                                    <img className="resizeImg" src={DaLat} />
                                </Button>
                                <Carousel.Caption>
                                    <h2>Đà Lạt</h2>
                                    <p>City of flowers</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Button variant="link" href={ROUTES.NHATRANG} className="d-block w-100 h-100">
                                    <img className="resizeImg" src={NhaTrang} />
                                </Button>
                                <Carousel.Caption>
                                    <h2>Nha Trang</h2>
                                    <p>Beach</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Button variant="link" href={ROUTES.VUNGTAU} className="d-block w-100 h-100">
                                    <img className="resizeImg" src={VungTau} />
                                </Button>

                                <Carousel.Caption>
                                    <h2>Vũng Tàu</h2>
                                    <p>Beach</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Button variant="link" href={ROUTES.HANOI} className="d-block w-100 h-100">
                                    <img className="resizeImg" src={HaNoi} />
                                </Button>

                                <Carousel.Caption>
                                    <h2>Hà Nội</h2>
                                    <p>Capital of VietNam</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </Style>

            </div>
        );
    }
}

// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);
export default Home;
