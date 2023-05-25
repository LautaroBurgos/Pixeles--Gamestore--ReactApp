import React,{ createContext,useEffect,useState } from "react";
export const CartContext = createContext();
 const CartContextProvider=({children})=>{
   
    const[cartList,setCartList]=useState([]);

    // const itemIsNotInCart(item){
    //     if(cartList.indexOf()){

    //     }
    // }
    useEffect(()=>{
      
    },[cartList]);
    const addToCart=(item,stockInt,count)=>{
        const cartItem={
            id:item.id,
            item:item,
            qty:count
        }
        setCartList((prevItems)=>[...prevItems,cartItem]);
      
    }
    const removeList=()=>{
        setCartList([]);
    }
    const deleteItem=(id)=>{
        const updatedCartList = cartList.filter((cartItem) => cartItem.id !== id);
        setCartList(updatedCartList);
    }
    
    return(
        <CartContext.Provider value={{cartList,addToCart,removeList,deleteItem}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;