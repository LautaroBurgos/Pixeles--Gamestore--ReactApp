import React from "react";
import StockProductos from '../StockProductos.json' ;
import {useParams } from "react-router-dom";
import '@fontsource/roboto';
import { containerStyle } from "./ItemContainerStyles";
import ItemCount from "../components/ItemCount/ItemCount";
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
        width:'300px',
        height:'400px'
    }

    return (
       
            <div style={containerStyle}>
            {   
                    itemsFiltrados.map((item)=>(
                        <div style={detailStyle} key={item.id}>
                            <h4 >{item.nombre}</h4>
                            <img style={imgStyle} src={item.img} alt="" />
                            <h4 >${item.precio}</h4>
                            <p>{item.descripcion}</p>
                           
                            <ItemCount stock={item.stock} initial="1" item={item}/>
                         
                        </div>
                    ))}
            </div>
     
       
    )
}
export default ItemDetailContainer