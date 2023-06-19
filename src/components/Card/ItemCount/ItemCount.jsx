import AddItemButton from "../AddItemButton/AddItemButton";
import {CartContext} from "../../../context/CartContext";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import { Link } from "react-router-dom";
import { useState ,useContext} from "react";

function ItemCount({item,stock,initial}){
    const { cartList,addToCart } = useContext(CartContext);
    let initialInt=parseInt(initial);
    let stockInt=parseInt(stock);
    const [count, setCount] = useState(initialInt);
   
    const isItemInCart=()=>{
        return ((cartList.find((cartItem)=>cartItem.id===item.id)!==undefined));
    }
    const [added,setAdded]= useState(isItemInCart());
    const validarCantidadSumar=(count,stock)=>{
        if(count<stock){
            setCount(count+1);
        }
    }
    const validarCantidadRestar=(count)=>{
        if(count>1){
            setCount(count-1);
        }
    }
    const handleAddToCart = (item,count) => {
        setAdded(true);
        addToCart(item,count);
    }
    return ( 
        <div>
            { added ?   
                    <>
                        <Link style={{color:'black'}} to={`/cart`}  >
                        <p  key="Inicio">Finalizar compra</p>
                        </Link>
                    </>
                    :
                    <> 
                        <p>{stockInt} unidades disponibles</p>  
                        <ItemQuantitySelector validarCantidadRestar={validarCantidadRestar} validarCantidadSumar={validarCantidadSumar} stockInt={stockInt} count={count}/>
                        <AddItemButton handleAddToCart={handleAddToCart} count={count} item={item} />
                    </>
            }    
        </div>
    )
}
export default ItemCount;