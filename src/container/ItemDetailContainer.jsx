import React from "react";
import StockProductos from '../StockProductos.json' ;
import {useParams } from "react-router-dom";
import '@fontsource/roboto';
import { containerStyle } from "./ItemListContainer";

const ItemDetailContainer =()=>{
    const {idItem}=useParams();
    const itemsFiltrados=StockProductos.filter((item)=>item.id==idItem);

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
        backgroundColor: 'black '
    }
    const imgStyle={
        width:'500px',
        height:'500px'
    }

    return (
            <div style={containerStyle}>
            {   
                    itemsFiltrados.map((product)=>(
                        <div style={detailStyle} key={product.id}>
                            <h4 >{product.nombre}</h4>
                            <img style={imgStyle} src={product.img} alt="" />
                            <h4 >${product.precio}</h4>
                            <p>{product.descripcion}</p>
                           
                        </div>
                    ))}
            </div>
                 
                  
       
    )
}
export default ItemDetailContainer