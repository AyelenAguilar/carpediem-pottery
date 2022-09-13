import { useState } from "react";
const ItemCount=({titulo})=>{

    const[cantidad, setCant]= useState(0);

    const suma=()=>{
        if(cantidad<5)
        setCant(cantidad+1);
    
    


}
    return(
        <div>
        <h3>{titulo}</h3>
        
        <button onClick={suma}>+</button>{cantidad}
        <button>-</button>
        <button></button>
        </div>

    );
}


export default ItemCount;