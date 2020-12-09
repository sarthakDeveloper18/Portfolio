import React, { Component } from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import L_VENUE from "../../assets/img/projects/venue.png";
import L_MANCHESTERCITY from "../../assets/img/projects/manchestercity.png";
import L_GUITAR from "../../assets/img/projects/guitar.png";
import L_YTD_DOWNL from "../../assets/img/projects/youtube_downloader.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_FIREBASE from '../../assets/img/skills/firebase.png';
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_MONGOOSE from '../../assets/img/skills/mongodb.svg';
import L_YTD from '../../assets/img/skills/youtube.jpg';
import './timeline.style.css';

class Timelines extends Component {
    render() {
        return (
            <div>
                <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
                <Timeline>
                    <Events>
                        <ImageEvent
                            date="07/24/2020"
                            className="text-center"
                            text="Venue"
                            src={L_VENUE}
                            alt="Venue"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> It is a static website which is based on React.
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>@material-ui/core</li>
                                                        <li>Scrolling Feature from javascript</li>
                                                        <li>React Slick</li>
                                                        <li>React Scroll</li>
                                                        <li>React Slick</li>
                                                    </ul>
                                                    <hr />
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_HTML5}
                                                                    alt="HTML 5"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></Image>{" "}
                                                                HTML5
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_CSS3}
                                                                    alt="CSS 3"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></Image>{" "}
                                                                CSS3
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_REACT}
                                                                    alt="React"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                React
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_MATERIALUI}
                                                                    alt="Material-UI"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Material-UI
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-center flex-nowrap text-center">
                                    <UrlButton
                                        href="https://auspicious-fowl.surge.sh/"
                                        target="_blank"
                                    >
                                        SEE LIVE
                                    </UrlButton>
                                    <UrlButton
                                        href="https://github.com/sarthakDeveloper18/venue"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                        <ImageEvent
                            date="08/30/2020"
                            className="text-center"
                            text="Manchester City"
                            src={L_MANCHESTERCITY}
                            alt="Manchester City"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> This app is basically contains the login and registration phase and also contains all the players and teams of Manchester City. The datbase that we have used is Firebase.
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>@material-ui/core</li>
                                                        <li>React reveal</li>
                                                        <li>Firebase</li>
                                                        <li>react-firebase-file-uploader</li>
                                                        <li>React-move</li>
                                                        <li>Filtering the matches of Manchester City</li>
                                                    </ul>
                                                    <hr />
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_REACT}
                                                                    alt="React"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                React
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_FIREBASE}
                                                                    alt="MongoDB"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Firebase
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_MATERIALUI}
                                                                    alt="Material-UI"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Material-UI
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-center flex-nowrap text-center">
                                    <UrlButton
                                        href="https://manchaster-city.web.app/"
                                        target="_blank"
                                    >
                                        SEE LIVE
                                    </UrlButton>
                                    <UrlButton
                                        href="https://github.com/sarthakDeveloper18/manchestercity"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                        <ImageEvent
                            date="09/08/2020"
                            className="text-center"
                            text="Guitar Store"
                            src={L_GUITAR}
                            alt="Guitar Store"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> Its an app for selling the guitar and contains the login and register page in order to buy the guitar.
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>@material-ui/core</li>
                                                        <li>react-dropzone</li>
                                                        <li>react-images</li>
                                                        <li>react-slick</li>
                                                        <li>react-paypal-express-checkout</li>
                                                        <li>Redux</li>
                                                        <li>bcrypt</li>
                                                        <li>Cloudinary</li>
                                                        <li>Express</li>
                                                        <li>Mongoose</li>
                                                    </ul>
                                                    <hr />
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_HTML5}
                                                                    alt="HTML 5"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></Image>{" "}
                                                                HTML5
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_CSS3}
                                                                    alt="CSS 3"
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></Image>{" "}
                                                                CSS3
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_REACT}
                                                                    alt="React"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                React
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_MONGOOSE}
                                                                    alt="Mongo DB"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Mongo DB
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_EXPRESS}
                                                                    alt="Express"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Express
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-center flex-nowrap text-center">
                                    <UrlButton
                                        href="https://github.com/sarthakDeveloper18/waves"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                        <ImageEvent
                            date="11/31/2020"
                            className="text-center"
                            text="Youtube Downloader"
                            src={L_YTD_DOWNL}
                            alt="Youtube Downloader"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey="0"
                                                className="p-2 text-center accordian-main"
                                            >
                                                PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> Its an app where you search for any youtube video and gives the top result and you can download that video on your local machine.
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>YouTube API</li>
                                                        <li>Node.js & EJS</li>
                                                    </ul>
                                                    <hr />
                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_NODE_JS}
                                                                    alt="Node.js"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Node.js
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="p-2">
                                                                <Image
                                                                    src={L_YTD}
                                                                    alt="Youtube API"
                                                                    rounded
                                                                    className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Youtube API
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-center flex-nowrap text-center">
                                    <UrlButton
                                        href="https://github.com/sarthakDeveloper18/youtube_downloader"
                                        target="_blank"
                                    >
                                        SOURCE CODE
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                    </Events>
                </Timeline>
            </div>
        );
    }
}

export default Timelines;