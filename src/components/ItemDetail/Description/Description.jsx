import { pStyle,pContainerStyle } from "../ItemDetailStyle";
const Description=({item})=>{
    return(
            <>
                <h4 >{item.name}</h4>
                <p style={{textAlign:'left'}}>{item.description}</p>
                <div style={pContainerStyle}>
                    <p style={pStyle}>Desde $</p>
                    <p style={{color:'black',margin:'5px'}}>{item.price}</p>
                    <p style={pStyle}>ARS</p>
                </div>
            </>
    )
}
export default Description;