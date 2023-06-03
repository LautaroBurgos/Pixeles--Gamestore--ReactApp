import { Link } from "react-router-dom";
import { linkStyle } from "../../../container/ItemContainerStyles";
const emptyCartStyle={
    height:'100%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
}
const EmptyCart =()=>{
    return(
       <div style={emptyCartStyle}>
            <h4>El carrito se encuentra vacio</h4>
            <li style={linkStyle}  >
            <Link to={`/`}>Seguir comprando</Link>
            </li>
       </div>
    )
}
export default EmptyCart;