import "../App.css";
import { useState } from "react";
const ItemCount=({titulo})=>{

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
                setCant(0);
            }
    
    }

    return(
        <div>
        <h3 className="titulo">{titulo}</h3>
        <button className="boton" onClick={suma}>+</button>
        <span>{cantidad}</span>
        <button className="boton" onClick={resta}>-</button>
        <button className="boton btn" onClick={agregar}>Agregar al carrito</button>
        </div>
    );

    }

export default ItemCount;