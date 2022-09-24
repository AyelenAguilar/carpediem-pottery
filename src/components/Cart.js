import { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart=()=>{
    const {cartList, clear}=useContext(CartContext);

    return(

    <>
    <h1>I'm a Cart</h1>
    <button onClick={clear}>Vaciar carrito</button>
    {
        cartList.map(producto =>
            <li>{producto.titulo}</li>)
        
    }
    </>
    );
}

export default Cart;