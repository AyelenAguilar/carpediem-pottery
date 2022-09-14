import ItemCount from "./ItemCount";
import getProductos from "../utils/productos";
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import Cargando from "./cargando";
import "../App.css";

const ItemListContainer=(props)=>{
    
    const [arrayProductos, setArrayProductos]= useState([]);
    const [cargando, setCargando]= useState(false)

    useEffect(()=>{
        setCargando(true)
        getProductos()
        .then((response)=> setArrayProductos(response))
        .catch((err)=> console.log(err))
        .finally(()=>setCargando(false))
    }, [])


    return(
        <>
        <div className="seccion">{props.greeting}</div>
        <ItemCount/>
    <div className="container-cards">
    {cargando ? <Cargando/> : <ItemList productos={arrayProductos}/>}
    </div>
    </>
    );
}

export default ItemListContainer;