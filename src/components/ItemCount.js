import "../App.css";
import { useState } from "react";
const ItemCount=({stock, onAdd})=>{

    const[cantidad, setCant]= useState(0);

    const suma=()=>{
        if(cantidad<stock){
        setCant(cantidad+1)}
    }
    
    const resta=()=>{
        if (cantidad<=0){

        }else setCant(cantidad-1)
    }

    return(
        <div>
        <button className="boton" onClick={suma}>+</button>
        <span>{cantidad}</span>
        <button className="boton" onClick={resta}>-</button>
        <button className="boton btn" onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    );

}

export default ItemCount;