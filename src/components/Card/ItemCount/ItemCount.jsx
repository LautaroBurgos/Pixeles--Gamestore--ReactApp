import { useState } from "react";
import {CartContext} from "../../../context/CartContext"
 import { useContext } from "react";
import { Link } from "react-router-dom";
const containerStyle={
    color:'black',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'70px'
}
const CountButtonStyle={
    margin:'5px',
    width:'40px',
    height:'40px',
    fontSize:'20px',
    backgroundColor: 'rgb(47, 44, 72)',
    color:'white',
    borderRadius:'10px',
    cursor:'pointer'
}
const countStyle={
    fontSize:'40px'
}
const addButtonStyle={
    margin:'2px',
    width:'150px',
    height:'60px',
    fontSize:'20px',
    backgroundColor: 'rgb(47, 44, 72)',
    color:'white',
    borderRadius:'10px',
    cursor:'pointer'
}
function ItemCount({item,stock,initial}){
     const { cartList,addToCart } = useContext(CartContext);

    let initialInt=parseInt(initial);
    let stockInt=parseInt(stock);
    const [count, setCount] = useState(initialInt);

    function isItemInCart(){
  
        if(cartList.find((cartItem)=>cartItem.id==item.id)!=undefined){
            return true
        }
        return false;
    }
    const [added,setAdded]= useState(isItemInCart());

    function validarCantidadSumar(count,stock){
        if(count<stock){
            setCount(count+1);
        }
    }

    function validarCantidadRestar(count){
        if(count>1){
            setCount(count-1);
        }
    }
    const handleAddToCart = (item,count) => {
        setAdded(true);
        addToCart(item,count);
      };

    return (
       
        <div>
             {
                    added
                    ? <>
                        <Link style={{color:'black'}} to={`/cart`}  >
                        <p  key="Inicio">Finalizar compra</p>
                        </Link>
                    </>

                    :
                    <> 
                     <h4 style={{margin:'10px'}}><b style={{color:'black'}}>{stockInt} </b> unidades disponibles</h4>
                        <div style={containerStyle}>
                           
                            <button style={CountButtonStyle} onClick={() => validarCantidadRestar(count)}>-</button>
                           <p style={countStyle}> {count}</p>
                            <button style={CountButtonStyle} onClick={() =>validarCantidadSumar(count,stockInt) }>+</button>
                        </div>
                        <div>
                            <button style={addButtonStyle} onClick={()=>handleAddToCart(item,count)} >Agregar al carrito</button>
                        </div>
                    </>
                }
           
        </div>

    )
}
export default ItemCount;