import { CheckoutFormDivStyle } from "./CheckoutFormStyle";
import { InputStyle } from "./CheckoutFormStyle";
import { LabelStyle } from "./CheckoutFormStyle";
import { SubmitStyle } from "./CheckoutFormStyle";
import { useState } from "react";
const CheckoutForm= ({onConfirm})=>{
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');

    const handleConfirm =(event)=>{
        event.preventDefault()
        const userData={
            name,phone,email
        }
        onConfirm(userData);
    }

    return(
      <div style={CheckoutFormDivStyle}>
            <form  style={CheckoutFormDivStyle} onSubmit={handleConfirm} >
                <label style={LabelStyle} >
                    Nombre
                    <input required style={InputStyle} type="text" value={name} onChange={({target})=>setName(target.value)} />
                </label>
                <label style={LabelStyle} >
                    Email
                    <input required style={InputStyle} type="email" value={email} onChange={({target})=>setEmail(target.value)} />
                </label>
                <label style={LabelStyle} >
                    Telefono
                    <input required style={InputStyle} type="number" value={phone} onChange={({target})=>setPhone(target.value)} />
                </label>
                <div>
                    <button style={SubmitStyle} type="submit"  >Crear Orden</button>  
                </div>
            </form>
      </div>
    )
}
export default CheckoutForm;