import { useState } from "react";
import {CartContext} from "../../context/CartContext";
 import { useContext } from "react";

function ItemCount({item,stock,initial}){
     const { addToCart } = useContext(CartContext);

    let initialInt=parseInt(initial);
    let stockInt=parseInt(stock);
    const [count, setCount] = useState(initialInt);
    function validarCantidadRestar(count){
        if(count>1){
            setCount(count-1);
        }
    }
    const handleAddToCart = (item,stockInt,count) => {
        addToCart(item,stockInt,count);
      };
    return (

        <div>
           <div>
                <h4>{stockInt} unidades disponibles</h4>
                <button onClick={() => validarCantidadRestar(count)}>-</button>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
           </div>
            <div>
                <button onClick={()=>handleAddToCart(item,stockInt,count)} >Agregar al carrito</button>
            </div>
        </div>

    )
}
export default ItemCount;