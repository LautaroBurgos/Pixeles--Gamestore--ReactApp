import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CartView from "../CartView/CartView";
import EmptyCart from "../EmptyCart/EmptyCart";

const CartContainer =()=>{
    const { cartList} = useContext(CartContext);
    return(
        <div>
            <h3>Carrito</h3>
            {cartList.length>0 ? <CartView/> : <EmptyCart/>}
        </div>
    )
}
export default CartContainer;