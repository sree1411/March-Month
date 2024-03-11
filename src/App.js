 
import './App.css';
import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import MobilePage from './pages/MobilePage';
import MobileInfoPage from './pages/MobileInfoPage';
import CartPage from './pages/CartPage';

function App() {
  return (
     
     <>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/mobiles/:id' element={<MobileInfoPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>

       </Routes>
     </>
  );
}

export default App;
