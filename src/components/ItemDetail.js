import "../App.css"
import {  useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";



const ItemDetail=({producto})=>{

    const [itemCount, setItemCount]= useState(0);
    const {addItem}= useContext(CartContext);
    

    const onAdd=(cantidad)=>{
        alert("Agregaste"+ cantidad + "productos");
        setItemCount(cantidad);
        addItem(producto,cantidad)
        
    }

return(
    <>
        <div className="detailContainer">
            <h3>{producto.titulo}</h3>
            <div className="detailsWrap">
            <img className="imgDetail" src={producto.imagen}></img>
            <div className="detalles">
            <p className="descripcionDetalle">{producto.detalle}</p>
            <p className="precio">${producto.precio}</p>
            <p className="disponibles">Quedan disponibles:{producto.stock} unidades</p>
            </div>
            </div>
            {
            itemCount ===0 ?<ItemCount stock={producto.stock} initial={itemCount} onAdd={onAdd}/>:<Link to="/cart"><button>Ir al carrito</button></Link>
            }
        </div>
    </>
)

}

export default ItemDetail;