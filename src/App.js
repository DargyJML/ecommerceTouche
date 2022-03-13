import './App.css';
import Cardsp, { Cardsprincipal } from './components/cards/Cardsprincipal';
import "./index.css";
import Nav from './components/container/Nav';
import Footer from './components/container/Footer'; 

import { Route, Routes } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Detalles from './components/pages/Detalles';

function App() {
  return (
    <div className="App">     
    
      <Nav/> 

      <Routes> 
        
        <Route path='/' element={<Landing/>}>
        </Route>
        <Route path='/detalles/:id' element={<Detalles/>}>
        </Route>
      </Routes>

      {/* <<Cardsprincipal/>> */} 
    

    
      <Footer/>
    </div>
  );
}

export default App;
