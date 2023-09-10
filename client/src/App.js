import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Navbar/>
      <AllRoutes/>
    </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
