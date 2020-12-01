import './App.css';
import Carousels from './component/carousel/carousel';
import MyNavbar from './component/navbar/navbar';
import TitleMessage from './component/titleMessage/titleMessage';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Carousels/>
      <TitleMessage/>
    </div>
  );
}

export default App;
