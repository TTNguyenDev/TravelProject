import React from 'react';
import { withAuthorization } from '../Session';


import Background from '../Img/home-background.jpg'
import Black_Background from "../Img/black-background.jpg"

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

    .Imgbackground1{
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

const Home = () => (
    <div>

        <Style>

            <div className="Imgbackground">
            </div>

            <div className="Imgbackground1">

            </div>

        </Style>

    </div>
);

// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);
export default Home;
