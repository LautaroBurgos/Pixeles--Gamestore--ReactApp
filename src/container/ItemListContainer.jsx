import React,{useEffect, useState} from "react";
import {collection,getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import Card from "../components/Card/Card";
import { containerStyle } from "./ItemContainerStyles";
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
           {loading ? (
            <p>Cargando...</p>
         ) : (
            items.map((item)=>(
               <Card key={item.id} item={item}></Card>
            ))
         )}
        </div>
    )
}
export  {ItemListContainer}