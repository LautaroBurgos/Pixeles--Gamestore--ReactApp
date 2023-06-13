import { db } from "../services/firebaseConfig";
import { containerStyle } from "./ItemContainerStyles";
import {collection,getDocs } from "firebase/firestore";
import ItemList from "../components/ItemList/ItemList";
import React,{useEffect, useState} from "react";

const ItemListContainer =()=>{
    const [items,setItems]=useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{

        const itemsCollection = collection(db,"items");
        getDocs(itemsCollection).then((snapshot)=>{
                setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})));
              
        });
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[]);
    
    return (
        <div style={containerStyle}>
           {loading ? <p>Cargando...</p> : <ItemList items={items}/>}
        </div>
    )
}
export  {ItemListContainer}