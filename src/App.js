import './App.css';
import Carousels from './component/carousel/carousel';
import MyNavbar from './component/navbar/navbar';
import TitleMessage from './component/titleMessage/titleMessage';
import About from './pages/about/about';
import {Fade, Slide} from "react-reveal";
import {Parallax} from 'react-parallax';
import { Container } from 'react-bootstrap';
import bckImage from './assets/img/parallex/background.webp';
import Skills from './pages/skills/skills';
import Experience from './pages/experience/experience';
import Timeline from './component/timeline/timeline';
import Contact from './pages/contact/contact';
import Footer from './component/footer/footer';
// import Particles from "react-particles-js";
// import { particlesOptions } from "./particleOptions";
import {Element} from 'react-scroll';

function App() {
  return (
    <div style={{position: "relative"}}>
      <Element name="Home">
        <MyNavbar/>
        <Carousels/>
        <TitleMessage/>
        {/* <Particles className="particles-box" params={particlesOptions}/> */}
      </Element>
      <Element name="About">
        <div>
          <Parallax blur={{ min: -30, max: 30 }} bgImage={bckImage} bgImageAlt="Hello" strength={-200}>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About/>
              </Fade>
            </Container>
          </Parallax>
        </div>
      </Element>
      <Element name="Skills">
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr/>
              <Skills/> 
            </Slide>
          </Container>
        </div>
      </Element>
      <Element name="Experience">
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr/>
              <Experience/> 
            </Fade>
          </Container>
        </div>
      </Element>
      <Element name="Timeline">
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr/>
              <Timeline/> 
            </Slide>
          </Container>
        </div>
      </Element>
      <Element name="Contact">
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr/>
              <Contact/> 
            </Fade>
          </Container>
        </div>
      </Element>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
