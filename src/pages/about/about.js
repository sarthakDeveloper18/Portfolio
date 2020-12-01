import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Profile from '../../assets/img/profile/profile.webp';
import './about.style.css';

class About extends Component {
  render() {
    return (
      <div id="about">
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
                    <li>Hi there! I am <strong>&nbsp;Anand Kumar Jha</strong></li>
                    <li>A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.</li>
                    <li>In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.</li>
                    <li>Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.</li>
                    <li>Along with that, I also help people as a COACH on their journey of becoming a professional programmer.</li>
                    <li>I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.</li>
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
                  </Col>
                </Row>
                  {/* <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                      </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                      </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/akjha96" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                      </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                      </Button>
                      </a>
                    </div>
                  </Col> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;