import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Nav} from 'react-bootstrap';
import './navbar.style.css';
import { scroller } from 'react-scroll';

class MyNavbar extends React.Component {

    scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: -70
        })
    }

    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                    <Navbar.Brand style={{cursor: 'pointer'}} onClick={()=> this.scrollToElement("Home")}>
                        Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link onClick={()=> this.scrollToElement("Home")}>Home</Nav.Link>
                            <Nav.Link onClick={()=> this.scrollToElement("About")}>About</Nav.Link>
                            <Nav.Link onClick={()=> this.scrollToElement("Skills")}>Skills</Nav.Link>
                            <Nav.Link onClick={()=> this.scrollToElement("Experience")}>Experience</Nav.Link>
                            <Nav.Link onClick={()=> this.scrollToElement("Timeline")}>Projects</Nav.Link>
                            <Nav.Link onClick={()=> this.scrollToElement("Contact")}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default MyNavbar;