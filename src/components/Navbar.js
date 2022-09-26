import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
    <header>
    <Link to="/" className="nombrePagina">Carpe Diem pottery</Link>
    <ul>
    <Link to="/category/9" className="categoria">TAZAS</Link>
    <Link to="/category/7" className="categoria">PLATOS</Link>
    <Link to="/category/8" className="categoria">VARIOS</Link>
    </ul>
    <Link to="/cart"> <div className="carritologo"><CartWidget/></div></Link>
    </header>
  
    );
  }

export default Navbar;