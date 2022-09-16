import { useState, useEffect } from "react";
import getProductos from "../utils/productos";
import ItemDetail from "./ItemDetail";
import Cargando from "./cargando";
const {datosProductos}= require("../utils/productos");

const ItemDetailContainer=()=>{
    const[producto,setProducto]= useState({})
    const [cargando, setCargando]= useState(false)



    useEffect(()=>{
        setCargando(true)
        getProductos(2000, datosProductos)
        .then((result)=> setProducto(result))
        .catch((err)=> console.log(err))
        .finally(()=>setCargando(false))
},[])

    return(
    <div>
        {cargando ? <Cargando/> : <ItemDetail producto={producto[3]}/>}
    </div>  
    );
    }

export default ItemDetailContainer;