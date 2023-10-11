import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./Component_Css/Home.css";
import "./Component_Css/About.css";
import "./Component_Css/Footer.css";
import "./Component_Css/Contact.css";
import "./Component_Css/Tour.css";
import "./Component_Css/MediaQuery.css";
import Home from './Component/Home';
import About from './Component/About';
import Tour from './Component/Tour';
import Contact from './Component/Contact';
import Services from './Component/Services';
import Asia from './Map_Component/Asia/Asia';
import Africa from './Map_Component/Africa/Africa';
import Europe from './Map_Component/Europe/Europe';
import MiddleEast from './Map_Component/MiddleEast/MiddleEast';
import SouthEastAsia from './Map_Component/SouthEastAsia/SouthEastAsia';
import Terms from './Component/Terms';
import Privacy from './Component/Privacy';
import Refund from './Component/Refund';
import India from './Map_Component/India/India';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Tour' element={<Tour />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Refund' element={<Refund />} />
          <Route path='/Asia' element={<Asia />} />
          <Route path='/Africa' element={<Africa />} />
          <Route path='/Europe' element={<Europe />} />
          <Route path='/MiddleEast' element={<MiddleEast />} />
          <Route path='/SouthEastAsia' element={<SouthEastAsia />} />
          <Route path='/India' element={<India />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
