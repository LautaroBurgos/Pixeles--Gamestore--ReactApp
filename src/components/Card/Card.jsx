import { NavLink } from "react-router-dom";
import { imgStyle,buttonStyle,cardStyle } from "../../container/ItemContainerStyles";
const Card=({item})=>{
    return(
        <div style={cardStyle} key={item.id}>
            <h4 >{item.name}</h4>
            <img style={imgStyle}  src={item.img} alt="" />
            <h4 >Desde ${item.price} ARS</h4>
            <button style={buttonStyle} >
                <NavLink style={{color:'black'}} to={`/items/${item.id}`}>Muestrame mas</NavLink>
            </button>
        </div>
    )
}
export default Card;