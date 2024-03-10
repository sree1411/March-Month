import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MobilePage from './pages/MobilePage';
import MobileSinglePage from './singlePages/MobileSinglePage';
import CartPage from './pages/CartPage';
import SearchResultPage from './pages/SearchResultPage';

function App() {
  return (
    <div>
      <Routes>
           <Route path='/' element ={<LandingPage/>} />
           <Route path='/mobiles' element ={<MobilePage/>} />
           <Route path='/mobiles/:id' element ={<MobileSinglePage/>} />
           <Route path='/cart' element ={<CartPage/>} />
           <Route path="/search/:searchQuery" element={<SearchResultPage/>} />


      </Routes>
       
    </div>
  );
}

export default App;
