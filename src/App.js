import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import Cart from './components/Cart';

const App=()=> {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:id' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
