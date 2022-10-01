import { useState, useEffect } from "react";
import getProductos from "../utils/productos";
import ItemDetail from "./ItemDetail";
import Cargando from "./cargando";
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { doc } from "firebase/firestore";

const ItemDetailContainer=()=>{
    const[producto,setProducto]= useState({})
    const [cargando, setCargando]= useState(false)
    const {id}= useParams();



    useEffect(()=>{
        setCargando(true)
        getProductos(2000)
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then(result => setProducto({
            id: result.id,
            ...result.data()
        }))
        .finally(()=>setCargando(false))
},[id])

    return(

        
    <div>
        
        {cargando ? <Cargando/> : <ItemDetail producto={producto}/>}
    </div>  
    );
    }

export default ItemDetailContainer;