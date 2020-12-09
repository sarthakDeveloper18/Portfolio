import React, { Component } from 'react';
import {Jumbotron, Button, Col, Row} from 'react-bootstrap';
import './contact.style.css';

class Contact extends Component {
  render() {
    return (
        <div>
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:sarthaksaxena1997@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="sarthaksaxena1997@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/sarthak-saxena-17b791145/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="Visit my LinkenIn">
                                <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/sarthakDeveloper18" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/sarthaksaxena1997" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="My other projects">
                                <i className="fab fa-facebook"></i> Facebook
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
  }
}

export default Contact;