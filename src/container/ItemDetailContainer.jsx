import {useParams } from "react-router-dom";
import '@fontsource/roboto';
import ItemCount from "../components/Card/ItemCount/ItemCount"
import React,{ useState,useEffect } from "react";
import {doc,getDoc} from "firebase/firestore";
import { db } from "../services/firebaseConfig";
const detailContainerStyle={
    marginLeft:'40px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
} 
const detailStyle={
    display:'flex',
    color: 'grey',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px',
    padding: '15px',
    borderRadius:'10px',
    width: '850px',
    height: '750px'
}
const imgStyle={
    marginRight:'40px',
    width:'300px',
    height:'400px'
}
const textContainerStyle={
    width:'300px'
}
const pContainerStyle={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}
const pStyle={
    margin:'3px'
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
                if(item!=undefined){
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
                {loading ? (
            <p>Cargando...</p>
         ) : (
                <div style={detailStyle} key={item.id}>       
                    <img style={imgStyle} src={item.img} alt="" />
                    <div style={textContainerStyle}>
                        <h4 >{item.name}</h4>
                        <p>{item.description}</p>
                        <div style={pContainerStyle}>
                            <p style={pStyle}>Desde</p>
                            <p style={{color:'black',margin:'5px'}}> {item.price}</p>
                            <p style={pStyle}>ARS</p>
                        </div>
                        {
                            onStock ?

                            <ItemCount stock={item.stock} initial="1" item={item}/> :
                            
                            <h4>Producto fuera de stock</h4>
                        }
                       
                    </div>
                 
                </div>
          
         )}
            </div>
     
       
    )
}
export default ItemDetailContainer