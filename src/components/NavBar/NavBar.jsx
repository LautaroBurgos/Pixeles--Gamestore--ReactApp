import React from "react";
import CartWidget from "../CartComponents/CartWidget/CartWidget";
import CategoryListContainer from "./CategoryListContainer/CategoryListContainer";
const navBarStyle={
  display:'flex',
  justifyContent:'space-around',
  alignItems:'center',
  color: 'white',
  fontSize: '18px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  textAlign: 'center',
  border: '1px solid black',
  width: '99.9%',
  height: '100px',
  backgroundColor: 'rgb(47, 44, 72)',
  paddingTop:'10px',
  paddingBottom:'10px',
  marginBottom:'10px',
}
const imgStyle={
  width:'100px',
  height:'100px',
  borderRadius:'50px'
}
const NavBar =()=>{
 
    return (
      <header>
        <nav style={navBarStyle}>
            <img style={imgStyle} src="/StockAssets/logo.png" alt="logo" />
            <CategoryListContainer></CategoryListContainer> 
            <CartWidget/>
        </nav>
      </header>
    )
}
export default NavBar