import { CheckoutFormDivStyle } from "./CheckoutFormStyle";
import { useState } from "react";
import { LabelStyle } from "./CheckoutFormStyle";
import { InputStyle } from "./CheckoutFormStyle";
import { SubmitStyle } from "./CheckoutFormStyle";
const CheckoutForm= ({onConfirm})=>{
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');

    const handleConfirm =(event)=>{
        event.preventDefault()
        const userData={
            name,phone,email
        }
        onConfirm(userData)
    }

    return(
      <div style={CheckoutFormDivStyle}>
            <form style={CheckoutFormDivStyle} onSubmit={handleConfirm} >
                <label style={LabelStyle} htmlFor="">
                    Nombre
                    <input style={InputStyle} type="text" value={name} onChange={({target})=>setName(target.value)} />
                </label>
                <label style={LabelStyle} htmlFor="">
                    Email
                    <input style={InputStyle} type="email" value={email} onChange={({target})=>setEmail(target.value)} />
                </label>
                <label style={LabelStyle} htmlFor="">
                    Telefono
                    <input style={InputStyle} type="number" value={phone} onChange={({target})=>setPhone(target.value)} />
                </label>
                <div>
                    <button style={SubmitStyle}  type="submit">Crear Orden</button>
                </div>
            
            </form>
      </div>
    )
}
export default CheckoutForm;