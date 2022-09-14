import CartWidget from "./CartWidget";

const Navbar=()=>{
    return(
    <header>
    <h1>Carpe Diem pottery</h1>
    <ul>
    <li>Seccion 1</li>
    <li>Seccion 2</li>
    <li>Seccion 3</li>
    
    <div className="carritologo">
    <CartWidget/>
    </div>
    </ul>
    </header>
  
    );
  }

export default Navbar;