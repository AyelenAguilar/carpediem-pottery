import "../App.css"
import { useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetail=({producto})=>{
    const[cantidad, setCant]= useState(0);

    const suma=()=>{
        if(cantidad<5){
        setCant(cantidad+1)}
    }
    
    const resta=()=>{
        if (cantidad >=1){
    
    setCant(cantidad-1)}

    }
    const agregar = () => {
        setCant (cantidad);
    
            if(cantidad !== 0){
                alert(`Se han agregado al carrito ${cantidad} productos`)
                setCant(1);
            }
    
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
            
            <ItemCount
            suma={suma}
            resta={resta}
            cantidad={cantidad}
            agregar={agregar}
        />
        </div>
    </>
)

}

export default ItemDetail;