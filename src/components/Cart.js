import { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart=()=>{
    const {cartList, clear, removeItem}=useContext(CartContext);

    return(

    <>
    <h1>Carrito de compras</h1>
    <div>
    {
        cartList.map((producto) =>
            <>
            <div className="divCarrito">
            <li>{producto.titulo}</li>
            <img src={producto.imagen} className="imgCarrito"></img>
            <div>PRECIO ${producto.precio}</div>
            <div>CANTIDAD:</div>
            <button className="btn" onClick={()=> removeItem(producto.id)}>Eliminar producto</button>
            </div>
            </>
            )
        
    }
    
    </div>
    <div className="totalCarrito">
    <button className="btn" onClick={clear}>Vaciar carrito</button>
    <div>TOTAL COMPRA:</div>
    </div>
    </>
    );
}

export default Cart;