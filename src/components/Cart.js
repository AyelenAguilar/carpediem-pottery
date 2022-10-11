
import { serverTimestamp, setDoc,doc , collection, updateDoc, increment} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import {  useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


const Cart=()=>{
    const {cartList, clear, removeItem, totalCompra, prodAgregados}=useContext(CartContext);

    const crearOrden= async()=>{
        let productosDB= cartList.map(prod =>({
            id: prod.id,
            precio: prod.precio,
            titulo: prod.titulo,
            cantidad: prod.cantidad
        }))
        let orden={
            comprador:{
                nombre:"Victoria Diacono",
                email:"vicdiacono@gmail.com",
                teléfono:"1199287433"
            },
            fecha: serverTimestamp(),
            productos: productosDB,
            total: totalCompra()
        }
        const nuevaOrden= doc(collection(db, "ordenes"))
        await setDoc(nuevaOrden, orden);

        cartList.forEach(async(producto)=>{
            const prodRef = doc(db, "productos",producto.id);
            console.log(producto.id, producto.cantidad)
            await updateDoc(prodRef, {
            stock: increment(-producto.cantidad)
            //arreglar el stock increment
        });
        })
        
        clear()
        alert('Tu orden de compra ha sido creada')
    }

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
        <div key={producto.id}>
            <div className="divCarrito">
            <li>{producto.titulo}</li>
            <img src={producto.imagen} className="imgCarrito"></img>
            <div>PRECIO ${producto.precio}</div>
            <div>CANTIDAD:{producto.cantidad}</div>
            <button className="btn" onClick={()=> removeItem(producto.id)}>Eliminar producto</button>
            </div>
            </div>
            )
    
    
    }
    <div className="totalCarrito">
    <button className="btn" onClick={clear}>Vaciar carrito</button>
    <p>Productos agregados:{prodAgregados()}</p>
    <div>
    <div className="ordenCompra">
    <h3>Orden de compra:</h3>
    <p>Subtotal</p>
    <p>TOTAL COMPRA: ${totalCompra()}</p>
    
    <button onClick={crearOrden} className="btn">Terminar compra</button>
    </div>
    </div>
    </div>
    </div>}
    
    </>

    );
}

export default Cart;