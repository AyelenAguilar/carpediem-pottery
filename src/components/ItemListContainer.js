import getProductos from "../utils/productos";
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import Cargando from "./cargando";
import "../App.css";
import { useParams } from "react-router-dom";

const ItemListContainer=()=>{
    
    const [arrayProductos, setArrayProductos]= useState([]);
    const [cargando, setCargando]= useState(false)
    const {id}= useParams();

    useEffect(()=>{
        if(id){
            setCargando(true)
            getProductos()
            .then((response)=> setArrayProductos(response.filter(prod=> prod.categoriaId == id)))
            .catch((err)=> console.log(err))
            .finally(()=> setCargando(false))
        }else{


        setCargando(true)
        getProductos(2000)
        .then((response)=> setArrayProductos(response))
        .catch((err)=> console.log(err))
        .finally(()=>setCargando(false))
        }
    }, [id])


    return(
        <>
        
        
    <div className="container-cards">
    {cargando ? <Cargando/> : <ItemList productos={arrayProductos}/>}
    </div>
    </>
    );
}

export default ItemListContainer;