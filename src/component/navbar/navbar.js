import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Nav } from 'react-bootstrap';
import Logo from '../../assets/icons/logow.webp';
import './navbar.style.css';

class MyNavbar extends React.Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                    <Navbar.Brand href="#home">
                        <img className="logo" src={Logo} alt='My Portfolio Logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Skills">Skills</Nav.Link>
                            <Nav.Link href="#Experience">Experience</Nav.Link>
                            <Nav.Link href="#Projects">Projects</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default MyNavbar;