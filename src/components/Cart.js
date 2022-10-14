import { serverTimestamp, setDoc,doc , collection, updateDoc, increment} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import {  useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

const Cart=()=>{
    const {cartList, clear, removeItem, totalCompra, prodAgregados, subtotal}=useContext(CartContext);

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

        cartList.forEach(async(prod)=>{
            const prodRef = doc(db, "productos", prod.id);
            await updateDoc(prodRef, {
            stock: increment(-prod.cantidad)
            
        });
        })
        
        clear()
        Swal.fire({
            title: 'Tu orden de compra ha sido creada',
            color:'black',
            background:'#F7E6C1',
            confirmButtonColor: "black",
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
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
            <img src={producto.imagen} className="imgCarrito" alt="imagenes de los productos seccion carrito"></img>
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
    <p className="subtotal">Subtotal: ${subtotal()}</p>
    <p> <strong> TOTAL COMPRA: ${totalCompra()}</strong></p>
    
    <button onClick={crearOrden} className="btn">Terminar compra</button>
    </div>
    </div>
    </div>
    </div>}
    
    </>

    );
}

export default Cart;