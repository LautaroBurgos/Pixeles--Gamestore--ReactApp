import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import CartView from "../CartView/CartView";
import EmptyCart from "../EmptyCart/EmptyCart";
const CartContainerStyle={
    height:'100%',
    width:'90%',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
}
const CartRootStyle={
    display:'flex',
    justifyContent:'center',
    height:'90vh'
}

const CartContainer =()=>{
    const { cartList} = useContext(CartContext);
    return(
        
        <div style={CartRootStyle}>
            <div style={CartContainerStyle}>
           
           {cartList.length>0 ? <CartView/> : <EmptyCart/>}
           
            </div>
        </div>
    )
}
export default CartContainer;