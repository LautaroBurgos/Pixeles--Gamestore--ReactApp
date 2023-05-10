import React from "react";
import StockProductos from '../StockProductos.json' ;
import { Link, NavLink } from "react-router-dom";

const ItemListContainer =({greeting})=>{
    console.log(StockProductos);
    return (
        <div>
            {greeting}
            <div>
                {StockProductos.map((product)=>(
                    <div key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img  src={product.img} alt="" />
                        <h4 >{product.precio}</h4>
                        <li >
                            <Link to={`items/${product.id}`}>Muestrame mas</Link>
                         </li>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemListContainer