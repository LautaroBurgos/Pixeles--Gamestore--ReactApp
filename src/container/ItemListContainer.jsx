import React from "react";
import StockProductos from '../StockProductos.json' ;
import { Link } from "react-router-dom";
const containerStyle={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
} 
const cardStyle={
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px',
    padding: '5px',
    border: '1px solid black',
    borderRadius:'10px',
    width: '450px',
    height: '500px',
    backgroundColor: 'black '
}
const imgStyle={
    width:'250px',
    height:'300px'
}
const titleStyle={
    fontSize: '30px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
}
const linkStyle={
    listStyle: 'none',
    color:'white',
    cursor:'pointer'
  }
const ItemListContainer =({greeting})=>{
    return (
        <div>
            <h2 style={titleStyle}>{greeting}</h2>
            <div style={containerStyle}>
                {StockProductos.map((product)=>(
                    <div style={cardStyle} key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img style={imgStyle}  src={product.img} alt="" />
                        <h4 style={{fontSize:'24px'}} >${product.precio}</h4>
                        <li style={linkStyle} >
                            <Link to={`items/${product.id}`}>Muestrame mas</Link>
                         </li>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
export  {ItemListContainer,containerStyle,cardStyle,imgStyle,linkStyle}