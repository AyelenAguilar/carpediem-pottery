import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import "../App.css";
import Cargando from "./cargando";
import { collection, getDocs, where, query } from "firebase/firestore";
import {db} from '../utils/firebaseConfig'
import { useParams } from "react-router-dom";


const ItemListContainer=()=>{
    
    const [arrayProductos, setArrayProductos]= useState([]);
    const[cargando, setCargando]= useState(false)
    const {id}=useParams();
    

    useEffect(()=>{
        setCargando(true)
        const consultaFirestore= async()=>{
            let q
            if(id){
                q= query(collection(db, "productos"), where('categoriaId', '==', parseInt(id)))
            }else{
                q=query(collection(db, "productos"))
            }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore= querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()

        })); 
            setCargando(false)
            return dataFromFirestore
        } 
        consultaFirestore()
            .then(result => setArrayProductos(result))
    },[id]);
        
    
    useEffect(()=>{
        return(()=>{
            setArrayProductos([]);
        })
    },[]);
    


    return(
    <div className="container-cards">
    {cargando ? <Cargando/>  :<ItemList productos={arrayProductos}/>}
    </div>
    
    );
    }

export default ItemListContainer;