import React from 'react';
import { withAuthorization } from '../../Session';


import Background from '../../Img/Destination/NhaTrang.jpg'
import promotionImg from '../../Img/promotion.jpg'
import experienceImg from '../../Img/experience.jpg'
import foodanddrink from '../../Img/foodanddrink.jpg'

import { ButtonToolbar, Button, Row, Col } from 'react-bootstrap'

import styled from 'styled-components'


import * as ROUTES from '../../../constants/routes';


const Style = styled.div`
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
`;

const NhaTrangViewBlog = () => (
    <div>
        <Style>
           
            <div className="Imgbackground">
               
            </div>
           
        </Style>

    </div>
);

// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);
export default NhaTrangViewBlog;
