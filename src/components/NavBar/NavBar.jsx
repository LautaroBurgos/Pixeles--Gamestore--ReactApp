import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const navBarStyle={
  display:'flex',
  justifyContent:'space-around',
  color: 'white',
  fontSize: '18px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  textAlign: 'center',
  border: '1px solid black',
  width: '99.9%',
  height: '100px',
  backgroundColor: 'black ',
  paddingTop:'10px',
  paddingBottom:'10px',
  marginBottom:'10px',
}
const imgStyle={
  width:'100px',
  height:'100px',
  borderRadius:'50px'
}
const listStyle={
  listStyle: 'none',
  color:'white',
  cursor:'pointer'
}
const NavBar =()=>{
  const categorias =[{idCategoria:1,nombreCategoria:"Aventura"},{idCategoria:2,nombreCategoria:"Terror"}]
    return (
      <header>
        <nav style={navBarStyle}>
            <img style={imgStyle} src="/StockAssets/logo.png" alt="logo" />
            <CartWidget/>
           
             <ul style={listStyle}>

                  <Link to={`/`} style={{textDecoration: 'none'}} >
                  <li style={{textDecoration: 'none'}} key="Inicio">Inicio</li>
                  </Link>
       
              {categorias.map((categoria)=>(
                <li key={categoria.idCategoria}>
                  <Link to={`category/${categoria.idCategoria}`}>{categoria.nombreCategoria}</Link>
                </li>
              ))}
             </ul>
    
          
        </nav>
      </header>
    )
}
export default NavBar