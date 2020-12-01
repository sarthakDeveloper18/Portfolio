import './App.css';
import Carousels from './component/carousel/carousel';
import MyNavbar from './component/navbar/navbar';
import TitleMessage from './component/titleMessage/titleMessage';
import About from './pages/about/about';
import Fade from "react-reveal/Fade";
import {Parallax} from 'react-parallax';
import { Container } from 'react-bootstrap';
import bckImage from './assets/img/parallex/background.webp';

function App() {
  return (
    <div className="App" style={{position: "relative"}}>
      <MyNavbar/>
      <Carousels/>
      <TitleMessage/>
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={bckImage} bgImageAlt="Hello" strength={-200}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About/>
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
