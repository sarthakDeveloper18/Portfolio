import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Profile from '../../assets/img/profile/me.jpg';
import './about.style.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="align-items-start p-2 my-details rounded">
                  <ul style={{textAlign: 'left'}}>
                    <li>Hi there! I am <strong>&nbsp;Sarthak Saxena</strong></li>
                    <li>A passionate programmer born in India. I am a <strong>Full Stack Web Developer</strong> with <strong>React.js</strong>, <strong>Redux</strong>, <strong>Express.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong></li>
                    <li>Also worked with <strong>React Native</strong> in order to build mobile apps for both Android and IOS</li>
                    <li>In 2019, I successfully completed my Engineering in <strong>'Computer Science And Engineering'</strong>.</li>
                    <li>I love to learn about new technologies which will make a better coder.</li>
                  </ul>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a rel="noopener noreferrer" target="_blank" href="https://github.com/sarthakDeveloper18">
                        <Button className="m-2" variant="outline-dark">Github</Button>
                      </a>
                    </div>
                    <div>
                      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/sarthak-saxena-17b791145/">
                        <Button className="m-2" variant="outline-info">Linkdin</Button>
                      </a>
                    </div>
                    <div>
                      <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sarthaksaxena1997">
                        <Button className="m-2" variant="outline-primary">Facebook</Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;