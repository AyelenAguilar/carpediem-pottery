import "../App.css"
import {  useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";



const ItemDetail=({producto})=>{

    const [itemCount, setItemCount]= useState(0);
    const {addItem}= useContext(CartContext);
    

    const onAdd=(cantidad)=>{
        if(cantidad !==0){
        Swal.fire({
            title: `Agregaste ${cantidad} producto(s) al carrito`,
            color:'black',
            background:'#F7E6C1',
            confirmButtonColor: "black",
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        });
        setItemCount(cantidad);
        addItem(producto,cantidad);
    }   
    }

return(
    <>
        <div className="detailContainer">
            <h3>{producto.titulo}</h3>
            <div className="detailsWrap">
            <img className="imgDetail" src={producto.imagen} alt="imagen de producto seccion detalles"></img>
            <div className="detalles">
            <p className="descripcionDetalle">{producto.detalle}</p>
            <p className="precio">${producto.precio}</p>
            <p className="disponibles">Quedan disponibles:{producto.stock} unidades</p>
            </div>
            </div>
            {
            itemCount ===0 ?<ItemCount stock={producto.stock} initial={itemCount} onAdd={onAdd}/>:<Link to="/cart"><button className="btn">Ir al carrito</button></Link>
            }
        </div>
    </>
)

}

export default ItemDetail;