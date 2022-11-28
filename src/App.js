import './App.scss';
import LiveScore from './LiveScore/LiveScore';
import Raf from './Components/Raf';
import Second from './Components/Second';
import Home from './Components/Header/Home';
import{Router,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

   



    </div>
  );
}

export default App;
