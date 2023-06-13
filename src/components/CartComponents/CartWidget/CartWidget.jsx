import { CartContext } from "../../../context/CartContext";
import { cartWidgetStyle } from "./CartWidgetStyles";
import { Link } from "react-router-dom";
import { React,useContext } from "react";
const CartWidget =()=>{
    const { cartList } = useContext(CartContext);
    function calculateTotalItems(cartList) {
        let total=0;
        cartList.forEach(cartItem => {
            total+=cartItem.qty;
        });
        return total;
    }
    return (
        <Link to={`/cart`} style={{textDecoration: 'none'}} >
            <div style={cartWidgetStyle}>
                <p> 🛒{calculateTotalItems(cartList)}</p>
            </div>
        </Link>
    )
}
export default CartWidget;