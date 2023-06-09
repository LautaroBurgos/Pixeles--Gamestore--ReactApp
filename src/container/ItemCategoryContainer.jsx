import { db } from "../services/firebaseConfig";
import Card from "../components/Card/Card";
import {containerStyle} from "./ItemContainerStyles";
import {collection,getDocs, query, where } from "firebase/firestore";
import React,{useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const ItemCategoryContainer =()=>{
    const [loading,setLoading]= useState(true);
    const {idCategory}=useParams();
    const [filteredItems,setFilteredItems]=useState([]);
    useEffect(()=>{
        setLoading(true);
        const q=query(collection(db,"items"),
        where("idCategory","==",parseInt(idCategory))
        )
        getDocs(q).then((snapshot)=>{
            if(snapshot.size===0) console.log("No results")
            else
                setFilteredItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})));
        });
        setTimeout(()=>{
            setLoading(false);
        },2000);

    },[idCategory]);

    return (
        <div>
            {loading ? <LoadingScreen/> : 
            <div style={containerStyle}>
               {filteredItems.map((item)=>(
                <Card key={item.id} item={item}></Card>
                ))}
            </div>}
        </div>
    )
}
export  {ItemCategoryContainer}