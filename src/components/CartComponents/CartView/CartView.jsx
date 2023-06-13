import CartCard from "../CartCard/CartCard";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { buttonsDivStyle,cartView,DeleteCartStyle,CheckoutButtonStyle } from "./CartViewStyle";
const CartView =()=>{
    const { cartList,removeList,total} = useContext(CartContext);
    return(
        <>
            <h2>Carrito de compras</h2>
            <div style={cartView}>
                {cartList.map((cartItem)=>(
                     <CartCard key={cartItem.id} cartItem={cartItem}></CartCard>
                ))}  
            </div>
            <div style={buttonsDivStyle}>
                <h2>TOTAL : ${total}</h2>
                <button  style={DeleteCartStyle} onClick={()=>removeList()}>Vaciar carrito</button>
                <NavLink style={{color:'black'}} to={`/checkout`}>
                    <button style={CheckoutButtonStyle}  >Checkout </button>
                </NavLink>   
            </div>
        </>
    )
}
export default CartView;