import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {containerStyle,imgStyle,linkStyle,cardStyle} from "./ItemContainerStyles";
import StockProductos from "../StockProductos.json";

const ItemListContainer =()=>{
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

    return (
        <div style={containerStyle}>
           {loading ? (
            <p>Cargando...</p>
         ) : (
            items.map((product)=>(
                <div style={cardStyle} key={product.id}>
                    <h4 >{product.nombre}</h4>
                    <img style={imgStyle}  src={product.img} alt="" />
                    <h4 style={{fontSize:'24px'}} >${product.precio}</h4>
                    <li style={linkStyle} >
                        <Link to={`items/${product.id}`}>Muestrame mas</Link>
                     </li>
                    
                </div>
            ))
         )}
        </div>
    )
}
export  {ItemListContainer}