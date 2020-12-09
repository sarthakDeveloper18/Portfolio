import React, { Component } from 'react';
import { Jumbotron, Card, Container } from "react-bootstrap";
import Tilt from "react-tilt";
import L_QA from '../../assets/img/experience/ofc.png';
import L_NT from '../../assets/img/experience/ofcTwo.jpeg';
import './experience.style.css';

class Experience extends Component {
    render() {
        return (
            <div>
                <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
                <Jumbotron className="jumbo-style">
                    <Container>
                        <Tilt options={{ max: 25 }}>
                            <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                    <Card.Img variant="top" className="img-resize" src={L_QA} alt="Accenture logo" />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">Software Engineer</Card.Title>
                                    </div>
                                    <div>
                                        <Card.Text className="text-center style">
                                            <strong className="body-title-style ">Software Engineer</strong>
                                            <br />
                                            <strong>Technology:</strong> Java, Selenium, Cuccumber, React, HTML, CSS, Javascript, Jenkins
                                            <br />
                                            <strong>Duration:</strong> January 2019 - March 2020
                                            <br />
                                            {/* <strong> Description </strong>
                                            <ul className="text-left">

                                            </ul> */}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Container>
                </Jumbotron>
                <Jumbotron className="jumbo-style">
                    <Container>
                        <Tilt options={{ max: 25 }}>
                            <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                    <Card.Img variant="top" className="img-resize" src={L_NT} alt="Accenture logo" />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">Software Engineer</Card.Title>
                                    </div>
                                    <div>
                                        <Card.Text className="text-center style">
                                            <strong className="body-title-style ">Software Engineer</strong>
                                            <br />
                                            <strong>Technology:</strong> React, Node, Express, React Native, Electron
                                            <br />
                                            <strong>Duration:</strong> March 2020 - Present
                                            <br />
                                            {/* <strong> Description </strong>
                                            <ul className="text-left">

                                            </ul> */}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Experience;