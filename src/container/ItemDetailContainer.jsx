import { db } from "../services/firebaseConfig";
import {doc,getDoc} from "firebase/firestore";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import {useParams } from "react-router-dom";
import React,{ useState,useEffect } from "react";

const detailContainerStyle={
    marginLeft:'40px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
} 
const ItemDetailContainer =()=>{
    const {idItem}=useParams();
    const [item,setItem]=useState();
    const [loading,setLoading]= useState(true);
    const [onStock,setOnStock]=useState('');

    useEffect(()=>{
        const itemRef= doc(db,"items",idItem);
        getDoc(itemRef).then((snapshot)=>{
            if(snapshot.exists()){
                setItem({id:snapshot.id,...snapshot.data()});
                if(item!==undefined){
                    if(item.stock>0){
                        setOnStock(true);
                    }else{
                        setOnStock(false);
                    }
               }
            }
            setTimeout(()=>{
                setLoading(false);
            },2000);
        }); 
    },[item]);

    return (
            <div style={detailContainerStyle}>
                {loading ? <p>Cargando...</p> : <ItemDetail item={item} onStock={onStock}/>}
            </div>     
    )
}
export default ItemDetailContainer