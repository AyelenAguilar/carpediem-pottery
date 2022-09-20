import { useState, useEffect } from "react";
import getProductos from "../utils/productos";
import ItemDetail from "./ItemDetail";
import Cargando from "./cargando";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
    const[producto,setProducto]= useState({})
    const [cargando, setCargando]= useState(false)
    const {id}= useParams();



    useEffect(()=>{
        setCargando(true)
        getProductos(2000)
        .then((result)=> setProducto(result.find(item=>item.id == id)))
        .catch((err)=> console.log(err))
        .finally(()=>setCargando(false))
},[])

    return(

        
    <div>
        
        {cargando ? <Cargando/> : <ItemDetail producto={producto}/>}
    </div>  
    );
    }

export default ItemDetailContainer;