import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

const App=()=> {
  return (
  <>
  <Navbar/>
  <ItemListContainer greeting="Productos disponibles"
  />
  </>
  );
}

export default App;
