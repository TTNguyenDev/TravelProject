import React from 'react';
import { withAuthorization } from '../../Session';


import Background from '../../Img/black-background.jpg'
import vungtau1 from '../../Img/destination-promotion/vungtau1.jpg'
import vungtau2 from '../../Img/destination-promotion/vungtau2.jpg'
import vungtau3 from '../../Img/destination-promotion/vungtau3.jpg'

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

const VungTauPromotion = () => (
    <div>
        <Style>
            <div className="Imgbackground">
                <br></br><br></br><br></br>
                <center className="Title">VŨNG TÀU</center>
                <br></br>
                <center className="kindoftravel">Promotion</center>
                <center>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://travel.com.vn/tourNDSGN840-014-050120XE3-V-F/vung-tau-bien-ho-coc-suoi-nuoc-nong-binh-chau-tour-gia-soc.aspx">
                                <img src={vungtau1} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-5">
                            <h2>Vũng Tàu - Biển Hồ Cốc - Suối nước nóng Bình Châu</h2>
                        </Col>
                        <Col  className="mt-5">
                            <font color='red'><h2>Nhập mã: test01 để được giảm 10%</h2></font>
                        </Col>
                    </Row>
<br></br>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://travel.com.vn/tourNDSGN874-001-250120XE-V-F/vung-tau-hanh-huong-le-phat-tim-hieu-thien-tong-lang-nghe-thuyet-phap-thuong-thuc-bua-trua-thuan-chay-tour-mua-ngay-mung-1-tet.aspx">
                                <img src={vungtau2} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-3">
                            <h2>Vũng Tàu - hành hương Lễ Phật - tìm hiểu Thiền Tông - lắng nghe thuyết pháp - thưởng thức bữa trưa thuần chay</h2>
                        </Col>
                        <Col  className="mt-5">
                            <font color='red'><h2>Nhập mã: test02 để được giảm 10%</h2></font>
                        </Col>
                    </Row>
<br></br>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://travel.com.vn/tourNDSGN874-001-250120XE-V-F/vung-tau-hanh-huong-le-phat-tim-hieu-thien-tong-lang-nghe-thuyet-phap-thuong-thuc-bua-trua-thuan-chay-tour-mua-ngay-mung-1-tet.aspx">
                                <img src={vungtau3} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-5">
                            <h2>Vũng Tàu - Suối nước nóng Bình Châu - Nghỉ dưỡng tại Ho Coc Beach Resort</h2>
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
export default VungTauPromotion;
