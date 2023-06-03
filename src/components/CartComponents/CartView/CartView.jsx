import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import CartCard from "../CartCard/CartCard";
import { NavLink } from "react-router-dom";
const cartView={
    width: '100%',
    height: '500px',
    color: 'white',
    fontSize: '18px',
    marginBottom:'10px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    border: '1px solid black',
    borderRadius:'10px',
    padding:'15px',
    backgroundColor: 'rgb(47, 44, 72)',
    overflowX: 'hidden',
    overflowY: 'scroll'
}
const buttonsDivStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
}
const CheckoutButtonStyle={
    margin:'5px',
    width:'700px',
    height:'50px',
    fontSize:'40px',
    backgroundColor: 'green',
    color:'white',
    borderRadius:'10px',
    cursor:'pointer'
}
const DeleteCartStyle={
    margin:'5px',
    width:'700px',
    height:'50px',
    fontSize:'40px',
    backgroundColor: 'red',
    color:'white',
    borderRadius:'10px',
    cursor:'pointer'
    
}
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