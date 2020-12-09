import React, { Component } from 'react';
import { Card, CardDeck, Row, Col, Image } from 'react-bootstrap';
import './skills.style.css';
import { skills } from './skills.data';

class Skills extends Component {
    render() {
        return (
            <div className="pt-3 pb-3">
                <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
                <CardDeck>
                    <Row className="d-flex justify-content-around">
                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">  
                                <Card.Body>
                                    <Card.Title className="text-center card-title">
                                        Frontend
                                    </Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        {
                                            skills.frontend.map((skill, index) => {
                                                return (
                                                    <span className="p-2" key={index}>
                                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                        </a>
                                                    </span>
                                                )
                                            })
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center  card-title">Backend</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        {skills.backend.map((skill, index) => (
                                            <span className="p-2" key={index}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                </a>
                                            </span>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="focus mt-2 mb-2 ">
                                <Card.Body>
                                    <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        {skills.hostingPlatforms.map((skill, index) => (
                                            <span className="p-2" key={index}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                </a>
                                            </span>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="focus mt-2 mb-2 ">
                                <Card.Body>
                                    <Card.Title className="text-center  card-title">Mobile</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        {skills.mobile.map((skill, index) => (
                                            <span className="p-2" key={index}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                </a>
                                            </span>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center  card-title">Database</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        {skills.databases.map((skill, index) => (
                                            <span className="p-2" key={index}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                </a>
                                            </span>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center  card-title">Version Control</Card.Title>
                                    <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        <span className="p-2">
                                            <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                                            </a>
                                        </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </div>
        );
    }
}

export default Skills;