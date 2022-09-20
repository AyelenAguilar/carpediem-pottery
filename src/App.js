import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from './components/Footer';

const App=()=> {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:id' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
