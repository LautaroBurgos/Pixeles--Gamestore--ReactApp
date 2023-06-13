import { cartCardStyle } from "../CartWidget/CartWidgetStyles";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import { ImgStyle,DeleteButtonStyle,ChangeUnitsDivStyle } from "./CartCardStyles";

const CartCard =({cartItem})=>{
    const {addUnit,quitUnit,  deleteItem} = useContext(CartContext);
    const [itemQty,setItemQty]=useState(cartItem.qty);
    const handleDeleteFromCart=(id)=>{
        deleteItem(id);
    }
    const handleAddUnit=(cartItem)=>{
        if(( cartItem.qty)<cartItem.item.stock){
            setItemQty(itemQty+1);
            cartItem.qty=((cartItem.qty)+1);
            addUnit(cartItem.item.price);
        }
    }
    const handleQuitUnit=(cartItem)=>{
        if(( cartItem.qty)>1){
            setItemQty(itemQty-1);
            cartItem.qty=((cartItem.qty)-1);
            quitUnit(cartItem.item.price);
        }
    }
    return (
        <div style={cartCardStyle} key={cartItem.id}>
            <h4 style={{width:'200px'}}>{cartItem.item.name}</h4>
            <img style={ImgStyle} src={cartItem.item.img} alt="" />
            {(cartItem.qty>1)?
                <h4 style={{width:'200px'}}>Cantidad : {itemQty} Unidades</h4>
            : 
                <h4 style={{width:'200px'}}>Cantidad : {itemQty} Unidad</h4>
            }
            <div style={ChangeUnitsDivStyle}>
                <button style={DeleteButtonStyle} onClick={()=>handleAddUnit(cartItem)}>+</button>
                <button style={DeleteButtonStyle} onClick={()=>handleQuitUnit(cartItem)}>-</button>
            </div>
            <h4 style={{width:'300px'}}>Precio x unidad : ${cartItem.item.price}</h4>
            <button style={DeleteButtonStyle} onClick={() => handleDeleteFromCart(cartItem.id)}>X</button>
        </div>
    )
}
export default CartCard;