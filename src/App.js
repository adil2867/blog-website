import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './component/banner';
import Navbar from './component/navbar';
import Routes_list from './routes';

function App() {
  return (
   <>
    <Navbar/>
    <Banner/>
    <BrowserRouter>
      <Routes_list/>
    </BrowserRouter>
   </>
  );
}

export default App;
