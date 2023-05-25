import { Link } from "react-router-dom";
import { linkStyle } from "../../container/ItemContainerStyles";
const EmptyCart =()=>{
    return(
       <div>
            <h4>El carrito se encuentra vacio</h4>
            <li style={linkStyle}  >
            <Link to={`/`}>Seguir comprando</Link>
            </li>
       </div>
    )
}
export default EmptyCart;