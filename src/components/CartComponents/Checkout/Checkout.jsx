import CheckoutForm from "./CheckoutForm/CheckoutForm";
import {db} from "../../../services/firebaseConfig";
import { doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Timestamp, addDoc, collection, updateDoc, writeBatch } from "firebase/firestore";
const divStyle={
    textAlign:'center'
}
const Checkout =()=>{
    const [loading,setLoading]=useState(false);
    const [orderId,setOrderId]=useState('');

    const {cartList,total,removeList}=useContext(CartContext);

    const createOrder=async({name,phone,email})=>{
        setLoading(true);
        try{
            const objOrder={
                buyer:{
                    name,phone,email
                },
                items:cartList,
                total:total,
                date:Timestamp.fromDate(new Date())
            }
            const batch=writeBatch(db);
            objOrder.items.forEach(cartItem=>{
                const itemDoc=doc(db,"items",cartItem.id);
                const newStock=parseInt(cartItem.item.stock-cartItem.qty);
            updateDoc(itemDoc,{stock:newStock});
            })

   

                await batch.commit()
                const orderRef=collection(db,'orders')
                const orderAdded=await addDoc(orderRef,objOrder);
                setOrderId(orderAdded.id);
                removeList();

        }catch(error){
            console.error(error)
        }finally{
            setLoading(false);
        }
    }
    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }
    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }
    return(
      <div style={divStyle}>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
      </div>
   )
}
export default Checkout;