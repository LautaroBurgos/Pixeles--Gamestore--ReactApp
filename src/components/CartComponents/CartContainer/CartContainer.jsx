import { CartContext } from "../../../context/CartContext";
import { CartContainerStyle,CartRootStyle } from "./CartContainerStyles";
import CartView from "../CartView/CartView";
import EmptyCart from "../EmptyCart/EmptyCart";
import { useContext ,useEffect,useState} from "react";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";

const CartContainer =()=>{
    const { cartList} = useContext(CartContext);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{

        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[]);
    


    return(
        <div style={CartRootStyle}>
            {
                loading ?
                <LoadingScreen/>:
                <div style={CartContainerStyle}>
                {cartList.length>0 ? <CartView/> :<EmptyCart/>}
                </div>
            }
        </div>
    )
}
export default CartContainer;