import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


const Cart=()=>{
    const {cartList, clear, removeItem, totalCompra, prodAgregados}=useContext(CartContext);

    return(

    <>
    <h1>Carrito de compras</h1>
    {cartList.length === 0 ?
    <div className="cartVacio">
        <p>El carrito esta vacío</p>
        <Link to="/">Volver a página principal</Link>
    </div>
    
    :
    <div>

    {
        cartList.map((producto) =>
            <>
            <div className="divCarrito" >
            <li>{producto.titulo}</li>
            <img src={producto.imagen} className="imgCarrito"></img>
            <div>PRECIO ${producto.precio}</div>
            <div>CANTIDAD:{producto.cantidad}</div>
            <button className="btn" onClick={()=> removeItem(producto.id)}>Eliminar producto</button>
            </div>
            </>
            )
    
    
    }
    <div className="totalCarrito">
    <button className="btn" onClick={clear}>Vaciar carrito</button>
    <p>Productos agregados:{prodAgregados()}</p>
    <div>TOTAL COMPRA: ${totalCompra()}</div>
    </div>

    <button className="btn">Terminar compra</button>
    </div>}
    
    </>

    );
}

export default Cart;