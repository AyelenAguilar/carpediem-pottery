import CartWidget from "./CartWidget";

const Navbar=()=>{
    return(
    <header>
    <h1>Carpe Diem</h1>
    <h2>pottery</h2>
    <ul>
    <li>Seccion 1</li>
    <li>Seccion 2</li>
    <li>Seccion 3</li>
    </ul>
    <CartWidget/>
    </header>
  
    );
  }

export default Navbar;