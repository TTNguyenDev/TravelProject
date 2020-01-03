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
`;


class Detail extends React.Component {
    render() {
        return (
            <div>

                <Style>

                    <div className="Imgbackground">
                        
                    </div>

                </Style>

            </div>
        );
    }
}

// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);
export default Detail;
