import React,{ createContext,useEffect,useState } from "react";
export const CartContext = createContext();
 const CartContextProvider=({children})=>{
   
    const[cartList,setCartList]=useState([]);
    const[total,setTotal]=useState(0);

    useEffect(()=>{
      
    },[cartList]);
    const addToCart=(item,count)=>{
        const cartItem={
            id:item.id,
            item:item,
            qty:count
        }
        setCartList((prevItems)=>[...prevItems,cartItem]);
        let newTotal=(total+(cartItem.item.price)*cartItem.qty);
        setTotal(newTotal);
    }
    const removeList=()=>{
        setCartList([]);
        setTotal(0);
    }
    const deleteItem=(id)=>{
        const updatedCartList = cartList.filter((cartItem) => cartItem.id !== id);
        setCartList(updatedCartList);
    }
    
    return(
        <CartContext.Provider value={{cartList,total,addToCart,removeList,deleteItem}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;