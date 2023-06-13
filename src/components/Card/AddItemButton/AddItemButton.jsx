import { AddButtonStyle } from "./AddItemButtonStyle";
const AddItemButton=({handleAddToCart,item,count})=>{
    return(
        <div>
            <button style={AddButtonStyle} onClick={()=>handleAddToCart(item,count)} >Agregar al carrito</button>
         </div>
    )
}
export default AddItemButton;