import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AuthUserContext } from '../Session'

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = { liveinVietNam: false, gowith: [], terrian: [], activities: [], knowdestination: [], visitdestination: [], recommended: false, checkagree: false };
    this.liveinVN = this.liveinVN.bind(this);
    this.notinVN = this.notinVN.bind(this);
    this.gowith = this.gowith.bind(this);
    this.activities = this.activities.bind(this);
    this.terrian = this.terrian.bind(this);
    this.knowdes = this.knowdes.bind(this);
    this.visitdes = this.visitdes.bind(this);
    this.recommend = this.recommend.bind(this);
    this.notrecommend = this.notrecommend.bind(this);
    this.checkagree = this.checkagree.bind(this);
    this.submit = this.submit.bind(this);
  }
  render() {
    return (
      <Form className="ml-5">
        <center>Quiz form </center>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={10}>
              <h4>Do you live in Viet Nam</h4>
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                onClick={this.liveinVN}
              />
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                onClick={this.notinVN}
              />
            </Col>
          </Form.Group>
        </fieldset>

        <h3>Who do you often go travel with?</h3> Can choose more than 1

        <div className="mb-3 mt-3">
          <Form.Check inline label="No. I often travel alone" type="radio" id="Alone" onClick={this.gowith} />
          <Form.Check inline label="With my friends" type="radio" id="Friends" onClick={this.gowith} />
          <Form.Check inline label="With my family" type="radio" id="Family" onClick={this.gowith} />
          <Form.Check inline label="With my lover" type="radio" id="lover" onClick={this.gowith} />
        </div>

        <h3>Which terrain do you often travel?</h3> Can choose more than 1

        <div className="mb-3 mt-3">
          <Form.Check inline label="Mountain" type="radio" id="Mountain" onClick={this.terrian} />
          <Form.Check inline label="Beach" type="radio" id="Beach" onClick={this.terrian} />
          <Form.Check inline label="Romantic" type="radio" id="Romantic" onClick={this.terrian} />
          <Form.Check inline label="Historical" type="radio" id="Historical" onClick={this.terrian} />
          <Form.Check inline label="Religion" type="radio" id="Religion" onClick={this.terrian} />
        </div>

        <h3>Which activities do you often do when travel?</h3> Can choose more than 1

        <div className="mb-3 mt-3">
          <Form.Check inline label="Relaxing" type="radio" id="Relaxing" onClick={this.activities} />
          <Form.Check inline label="Swimming" type="radio" id="Swimming" onClick={this.activities} />
          <Form.Check inline label="Climbing moutain" type="radio" id="Climbing moutain" onClick={this.activities} />
          <Form.Check inline label="Taking pictures" type="radio" id="Taking pictures" onClick={this.activities} />
          <Form.Check inline label="Volunteering" type="radio" id="Volunteering" onClick={this.activities} />
          <Form.Check inline label="Eating, Drinking" type="radio" id="Eating, Drinking" onClick={this.activities} />
          <Form.Check inline label="Playing with friends" type="radio" id="Playing with friends" onClick={this.activities} />
          <Form.Check inline label="Dating" type="radio" id="Dating" onClick={this.activities} />
        </div>

        <h3>Have you ever heard about these places?</h3> Can choose more than 1

        <div className="mb-3 mt-3">
          <Form.Check inline label="Vũng Tàu" type="radio" id="Vũng Tàu" onClick={this.knowdes} />
          <Form.Check inline label="Mũi Né" type="radio" id="Mũi Né" onClick={this.knowdes} />
          <Form.Check inline label="Hà Nội" type="radio" id="Hà Nội" onClick={this.knowdes} />
          <Form.Check inline label="Sa Pa" type="radio" id="Sa Pa" onClick={this.knowdes} />
          <Form.Check inline label="Huế" type="radio" id="Huế" onClick={this.knowdes} />
          <Form.Check inline label="Hội An" type="radio" id="Hội An" onClick={this.knowdes} />
          <Form.Check inline label="Đà Nẵng" type="radio" id="Đà Nẵng" onClick={this.knowdes} />
          <Form.Check inline label="Buôn Ma Thuật" type="radio" id="Buôn Ma Thuật" onClick={this.knowdes} />
          <Form.Check inline label="Cà Mau" type="radio" id="Cà Mau" onClick={this.knowdes} />
        </div>

        <h3>Have you ever visited these places?</h3> Can choose more than 1

        <div className="mb-3 mt-3">
          <Form.Check inline label="Vũng Tàu" type="radio" id="Vũng Tàu" onClick={this.visitdes} />
          <Form.Check inline label="Mũi Né" type="radio" id="Mũi Né" onClick={this.visitdes} />
          <Form.Check inline label="Hà Nội" type="radio" id="Hà Nội" onClick={this.visitdes} />
          <Form.Check inline label="Sa Pa" type="radio" id="Sa Pa" onClick={this.visitdesdes} />
          <Form.Check inline label="Huế" type="radio" id="Huế" onClick={this.visitdes} />
          <Form.Check inline label="Hội An" type="radio" id="Hội An" onClick={this.visitdes} />
          <Form.Check inline label="Đà Nẵng" type="radio" id="Đà Nẵng" onClick={this.visitdes} />
          <Form.Check inline label="Buôn Ma Thuật" type="radio" id="Buôn Ma Thuật" onClick={this.visitdes} />
          <Form.Check inline label="Cà Mau" type="radio" id="Cà Mau" onClick={this.visitdes} />
        </div>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={10}>
              <h4>Do you want us to recommend destination in Viet Nam?</h4>
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                onClick={this.recommend}
              />
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                onClick={this.notrecommend}
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="I agree with all my choice" onClick={this.checkagree} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="button" onClick={this.submit}>OK</Button>
          </Col>
        </Form.Group>

      </Form>

    );
  }

  liveinVN() {
    this.setState({ liveinVietNam: true });
  }

  notinVN() {
    this.setState({ liveinVietNam: false });
  }

  gowith(evt) {
    this.state.gowith.push(evt.target.id);
  }

  terrian(evt) {
    this.state.terrian.push(evt.target.id);
  }

  activities(evt) {
    this.state.activities.push(evt.target.id);
  }

  knowdes(evt) {
    this.state.knowdestination.push(evt.target.id);
  }

  visitdes(evt) {
    this.state.visitdestination.push(evt.target.id);
  }

  recommend() {
    this.setState({ recommended: true });
  }

  notrecommend() {
    this.setState({ recommended: false });
  }

  checkagree(evt) {
    this.setState({ checkagree: evt.target.checked });
  }

//   const Navigation = () => (
//     <div>
//         <AuthUserContext.Consumer>
//             {authUser => authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
//         </AuthUserContext.Consumer>
//     </div>
// )


  submit() {
    if (!AuthUserContext.Consumer.authUser) {
      alert("Please login to use this feature!");
      return;
    }

    if (this.state.checkagree == false) {
      alert("Please check the agree box");
    }
    else {
      alert("Your answers is recorded!")
      console.log("Live in Viet Nam ")
      console.log(this.state.liveinVietNam ? 'Yes' : 'No');

      console.log("Hay đi du lịch ")
      for (var i = 0; i < this.state.gowith.length; i++)
        console.log(this.state.gowith[i]);

      console.log("Hay đi du lịch ở những nơi")
      for (i = 0; i < this.state.terrian.length; i++)
        console.log(this.state.terrian[i]);

      console.log("Hay làm những hoạt động này khi đi du lịch")
      for (i = 0; i < this.state.activities.length; i++)
        console.log(this.state.activities[i]);

      console.log("Những nơi biết tới tại Việt Nam")
      for (i = 0; i < this.state.knowdestination.length; i++)
        console.log(this.state.knowdestination[i]);

      console.log("Những nơi đã du lịch tại Việt Nam")
      for (i = 0; i < this.state.visitdestination.length; i++)
        console.log(this.state.visitdestination[i]);

      console.log("Allow Recommended Place")
      console.log(this.state.recommended ? 'Yes' : 'No');
    }
  }
}

export default Landing;