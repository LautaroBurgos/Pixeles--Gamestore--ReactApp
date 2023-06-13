import CartWidget from "../CartComponents/CartWidget/CartWidget";
import CategoryListContainer from "./CategoryListContainer/CategoryListContainer";
import React from "react";
import { navBarStyle,imgStyle } from "./NavBarStyles";
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