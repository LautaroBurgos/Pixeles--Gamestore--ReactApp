import { CartContext } from "../../../context/CartContext";
import { CartContainerStyle,CartRootStyle } from "./CartContainerStyles";
import CartView from "../CartView/CartView";
import EmptyCart from "../EmptyCart/EmptyCart";
import { useContext } from "react";

const CartContainer =()=>{
    const { cartList} = useContext(CartContext);
    return(
        <div style={CartRootStyle}>
            <div style={CartContainerStyle}>
                {cartList.length>0 ? <CartView/> :<EmptyCart/>}
            </div>
        </div>
    )
}
export default CartContainer;