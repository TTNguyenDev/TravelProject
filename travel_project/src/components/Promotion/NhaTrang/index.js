import React from 'react';
import { withAuthorization } from '../../Session';


import Background from '../../Img/black-background.jpg'
import dalat1 from '../../Img/destination-promotion/nhatrang1.jpg'
import dalat2 from '../../Img/destination-promotion/dalat2.jpg'
import dalat3 from '../../Img/destination-promotion/nhatrang2.jpg'

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
        color: green;
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

const NhaTrangPromotion = () => (
    <div>
        <Style>
            <div className="Imgbackground">
                <br></br><br></br><br></br>
                <center className="Title">Đà Lạt</center>
                <br></br>
                <center className="kindoftravel">Promotion</center>
                <center>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://www.saigontourist.net/vi/tour-trong-nuoc/3405/du-lich-nha-trang-lang-chai-xua-soi-island-doc-let-lang-yen-mai-sinh">
                                <img src={dalat1} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-4">
                            <h2>DU LỊCH NHA TRANG - LÀNG CHÀI XƯA - SỎI ISLAND - DỐC LẾT - LÀNG YẾN MAI SINH</h2>
                        </Col>
                        <Col  className="mt-5">
                            <font color='red'><h2>Nhập mã: test01 để được giảm 10%</h2></font>
                        </Col>
                    </Row>
<br></br>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://www.saigontourist.net/vi/tour-trong-nuoc/3407/du-lich-tai-nha-trang-da-lat">
                                <img src={dalat2} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-5">
                            <h2>DU LỊCH TẠI NHA TRANG - ĐÀ LẠT</h2>
                        </Col>
                        <Col  className="mt-5">
                            <font color='red'><h2>Nhập mã: test02 để được giảm 10%</h2></font>
                        </Col>
                    </Row>
<br></br>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://www.saigontourist.net/vi/tour-trong-nuoc/3145/du-lich-tet-nguyen-dan-2020-tai-nha-trang-lang-chai-xua-soi-island-doc-let-i-resort-lang-yen-mai-sinh-mung-2345-tet">
                                <img src={dalat3} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-2">
                            <h2>DU LỊCH TẾT NGUYÊN ĐÁN 2020 TẠI NHA TRANG - LÀNG CHÀI XƯA - SỎI ISLAND - DỐC LẾT - I RESORT - LÀNG YẾN MAI SINH</h2>
                        </Col>
                        <Col  className="mt-5">
                            <font color='red'><h2>Nhập mã: test03 để được giảm 10%</h2></font>
                        </Col>
                    </Row>
                </center>
            </div>
        </Style>

    </div>
);

// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);
export default NhaTrangPromotion;
