import React from "react";
import CartWidget from "./CartWidget";
const NavBar =()=>{
    return (
      <header>
        <nav>
            <img src="" alt="logo" />
            <h2>Pixeles-Gamestore</h2>
            <CartWidget/>
            <ul>
                <li><a href="#">PS5</a></li>
                <li><a href="#">PS4</a></li>
                <li><a href="#">XBOX-ONE-X</a></li>
            </ul>
        </nav>
      </header>
    )
}
export default NavBar