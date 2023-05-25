import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
const cartView={
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px',
    padding: '15px',
    border: '1px solid black',
    borderRadius:'10px',
    width: '550px',
    height: '750px',
    backgroundColor: 'black '
}
const imgStyle={
    width:'100px',
    height:'100px'
}

const CartView =()=>{
    const { cartList, deleteItem} = useContext(CartContext);
    const handleDeleteFromCart=(id)=>{
        deleteItem(id);
    }
    return(
        <div>
            
            {cartList.map((cartItem)=>(
                     <div key={cartItem.id}>
                     <h4>{cartItem.item.nombre}</h4>
                     <img style={imgStyle} src={cartItem.item.img} alt="" />
                     <h4>Cantidad :{cartItem.qty}</h4>
                     <button onClick={() => handleDeleteFromCart(cartItem.id)}>Eliminar del carrito</button>
                 </div>
            ))}
        </div>
    )
}
export default CartView;