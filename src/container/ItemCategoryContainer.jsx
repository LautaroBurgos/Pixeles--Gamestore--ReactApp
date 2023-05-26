import React from "react";
import StockProductos from '../StockProductos.json' ;
import { NavLink ,useParams} from "react-router-dom";
import {containerStyle,imgStyle,titleStyle,linkStyle,cardStyle} from "./ItemContainerStyles";

const ItemCategoryContainer =()=>{
    const {idCategory}=useParams();
    const itemsFiltrados=StockProductos.filter((item)=>item.idCategoria==idCategory);
    return (
            <div style={containerStyle}>
                 {
                itemsFiltrados.map((product)=>(
                    <div style={cardStyle} key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img style={imgStyle}  src={product.img} alt="" />
                        <h4 >${product.precio}</h4>
                        <li style={linkStyle} >
                            <NavLink to={`/items/${product.id}`}>Muestrame mas</NavLink>
                         </li>
                    </div>
                ))}
            </div>
            
            
    
    )
}
export default ItemCategoryContainer