import React from 'react';
import { withAuthorization } from '../../Session';


import Background from '../../Img/black-background.jpg'
import dalat1 from '../../Img/destination-promotion/hanoi1.jpg'
import dalat2 from '../../Img/destination-promotion/hanoi2.jpg'
import dalat3 from '../../Img/destination-promotion/hanoi3.jpg'

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

const HaNoiPromotion = () => (
    <div>
        <Style>
            <div className="Imgbackground">
                <br></br><br></br><br></br>
                <center className="Title">Hà Nội</center>
                <br></br>
                <center className="kindoftravel">Promotion</center>
                <center>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://www.saigontourist.net/vi/tour-trong-nuoc/3039/du-lich-tet-nguyen-dan-2020-tai-ha-noi-trang-an-bai-dinh-ha-long-mung-2-tet">
                                <img src={dalat1} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-4">
                            <h2>DU LỊCH TẾT NGUYÊN ĐÁN 2020 TẠI HÀ NỘI - TRÀNG AN - BÁI ĐÍNH - HẠ LONG</h2>
                        </Col>
                        <Col  className="mt-5">
                            <font color='red'><h2>Nhập mã: test01 để được giảm 10%</h2></font>
                        </Col>
                    </Row>
<br></br>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://www.saigontourist.net/vi/tour-trong-nuoc/3042/du-lich-tet-nguyen-dan-2020-tai-ha-noi-chua-tam-chuc-sapa-fansipan-lao-cai-den-hung-mung-2-tet">
                                <img src={dalat2} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-3">
                            <h2>DU LỊCH TẾT NGUYÊN ĐÁN 2020 TẠI HÀ NỘI - CHÙA TAM CHÚC - SAPA - FANSIPAN- LÀO CAI - ĐỀN HÙNG </h2>
                        </Col>
                        <Col  className="mt-5">
                            <font color='red'><h2>Nhập mã: test02 để được giảm 10%</h2></font>
                        </Col>
                    </Row>
<br></br>
                    <Row className="ml-5 mr-5 bg-light">
                        <Col>
                            <Button variant="link" href="https://www.saigontourist.net/vi/tour-trong-nuoc/3053/du-lich-tet-nguyen-dan-2020-tai-moc-chau-dien-bien-lai-chau-fansipan-lao-cai-mung-24-tet">
                                <img src={dalat3} class="resizeImg" ></img>
                            </Button>
                        </Col>
                        <Col className="mt-4">
                            <h2>DU LỊCH TẾT NGUYÊN ĐÁN 2020 TẠI MỘC CHÂU - ĐIỆN BIÊN - LAI CHÂU - FANSIPAN - LÀO CAI</h2>
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
export default HaNoiPromotion;
