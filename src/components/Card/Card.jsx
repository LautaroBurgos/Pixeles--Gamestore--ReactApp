import { buttonStyle,cardStyle,imgStyle } from "../../container/ItemContainerStyles";
import { NavLink } from "react-router-dom";
const Card=({item})=>{
    return(
        <div style={cardStyle} key={item.id}>
            <h4 >{item.name}</h4>
            <img style={imgStyle}  src={item.img} alt="" />
            <h4 >Desde ${item.price} ARS</h4>
            <NavLink style={{color:'black'}} to={`/items/${item.id}`}><button style={buttonStyle} >Muestrame mas</button></NavLink>
        </div>
    )
}
export default Card;