import { cartCardStyle } from "../CartWidget/CartWidgetStyles";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
const imgStyle={
    width:'80px',
    height:'80px',
}
const deleteButtonStyle={
    margin:'2px',
    width:'40px',
    height:'40px',
    fontSize:'20px',
    backgroundColor: 'rgb(47, 44, 72)',
    color:'white',
    borderRadius:'10px',
    cursor:'pointer'
}

const CartCard =({cartItem})=>{
    const {  deleteItem} = useContext(CartContext);
    const handleDeleteFromCart=(id)=>{
        deleteItem(id);
    }
    return (
        <div style={cartCardStyle} key={cartItem.id}>
            <h4 style={{width:'200px'}}>{cartItem.item.name}</h4>
            <img style={imgStyle} src={cartItem.item.img} alt="" />
            {(cartItem.qty>1)?
                <h4 style={{width:'200px'}}>Cantidad : {cartItem.qty} Unidades</h4>
            : 
                <h4 style={{width:'200px'}}>Cantidad : {cartItem.qty} Unidad</h4>
            }
            <h4 style={{width:'300px'}}>Precio x unidad : ${cartItem.item.price}</h4>
            <button style={deleteButtonStyle} onClick={() => handleDeleteFromCart(cartItem.id)}>X</button>
        </div>
    )
}
export default CartCard;