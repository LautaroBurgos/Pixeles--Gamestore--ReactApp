import {useParams } from "react-router-dom";
import '@fontsource/roboto';
import { containerStyle } from "./ItemContainerStyles";
import ItemCount from "../components/ItemCount/ItemCount";
import StockProductos from '../StockProductos.json' ;
import React,{ useState,useEffect } from "react";
const detailStyle={
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px',
    padding: '15px',
    border: '1px solid black',
    borderRadius:'10px',
    width: '550px',
    height: '750px',
    backgroundColor: 'rgb(47, 44, 72) '
}
const imgStyle={
    width:'300px',
    height:'400px'
}
const ItemDetailContainer =()=>{
    const {idItem}=useParams();
    const [items,setItems]=useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        const productList=new Promise ((resolve,reject)=>{
           setTimeout(()=>{
            resolve(StockProductos)
           },2000) 
        })
        productList.then(result =>{
            setItems(result);
            setLoading(false);
        });
    },[]);

    const itemsFiltrados=items.filter((item)=>item.id==idItem);
    return (
        
            <div style={containerStyle}>
                {loading ? (
            <p>Cargando...</p>
         ) : (
            itemsFiltrados.map((item)=>(
                <div style={detailStyle} key={item.id}>
                    <h4 >{item.nombre}</h4>
                    <img style={imgStyle} src={item.img} alt="" />
                    <h4 >${item.precio}</h4>
                    <p>{item.descripcion}</p>
                   
                    <ItemCount stock={item.stock} initial="1" item={item}/>
                 
                </div>
            ))
         )}
            </div>
     
       
    )
}
export default ItemDetailContainer