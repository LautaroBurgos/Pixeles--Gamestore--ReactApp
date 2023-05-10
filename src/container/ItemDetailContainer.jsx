import React from "react";
import StockProductos from '../StockProductos.json' ;
import { Link, NavLink, Route,Routes,useParams } from "react-router-dom";

const ItemDetailContainer =()=>{
    const {idItem}=useParams();
    console.log(idItem);
    const itemsFiltrados=StockProductos.filter((item)=>item.id==idItem);
    console.log(itemsFiltrados)
    return (
            <>
            {   
                    itemsFiltrados.map((product)=>(
                        <div key={product.id}>
                            <h4 >{product.nombre}</h4>
                            <img  src={product.img} alt="" />
                            <h4 >{product.precio}</h4>
                            <p>{product.descripcion}</p>
                           
                        </div>
                    ))}
            </>
                 
                  
       
    )
}
export default ItemDetailContainer