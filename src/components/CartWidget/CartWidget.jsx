import React from "react";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import { divStyle } from "./CartWidgetStyles";
import { Link } from "react-router-dom";
const CartWidget =()=>{
    const { cartList } = useContext(CartContext);
    function calcularTotalItems(cartList) {
        let total=0;
        cartList.forEach(cartItem => {
            total+=cartItem.qty;
        });
        return total;
    }
    return (
        <Link to={`/cart`} style={{textDecoration: 'none'}} >
                        <div style={divStyle}>
            <p> 🛒{calcularTotalItems(cartList)}</p>
            </div>
        </Link>

    )
}
export default CartWidget