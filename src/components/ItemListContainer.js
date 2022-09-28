import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import "../App.css";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../utils/firebaseConfig'

const ItemListContainer=()=>{
    
    const [arrayProductos, setArrayProductos]= useState([]);
    

    useEffect(()=>{
        const consultaFirestore= async()=>{
            const querySnapshot = await getDocs(collection(db,"productos"));
            const datosFirestore=querySnapshot.docs.map(producto =>({
            id: producto.id,
            ...producto.data()
            }))
            return datosFirestore
            
            
        } 
        consultaFirestore()
        .then(result => console.log(result))
    },[arrayProductos]);
        
    
    useEffect(()=>{
        return(()=>{
            setArrayProductos([]);
        })
    },[]);
    


    return(
    <div className="container-cards">
    <ItemList productos={arrayProductos}/>
    </div>
    
      );
    }

export default ItemListContainer;