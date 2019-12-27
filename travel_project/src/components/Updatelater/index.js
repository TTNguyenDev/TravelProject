import React from 'react';
import { withAuthorization } from '../Session';


import Background from '../Img/black-background.jpg'

import styled from 'styled-components'

import * as ROUTES from '../../constants/routes';

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
    .Updatelater{
        color: red;
        font-size : 75px;
        font-weight:bold;
    }
`;

const Updatelater = () => (
    <div>

        <Style>

            <div className="Imgbackground">
                <center className="Updatelater">Update later</center>
            </div>

        </Style>

    </div>
);

export default Updatelater;
