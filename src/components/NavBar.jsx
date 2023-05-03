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
                <li><a href="#">God of War Ragnarok</a></li>
                <li><a href="#">Forza Horizon 5</a></li>
                <li><a href="#">Forspoken</a></li>
                <li><a href="#">Red Dead Redemption 2</a></li>
            </ul>
        </nav>
      </header>
    )
}
export default NavBar