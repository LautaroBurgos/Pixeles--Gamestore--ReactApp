import ItemCount from "../Card/ItemCount/ItemCount";
import Description from "./Description/Description";
import { detailStyle,imgStyle,textContainerStyle } from './ItemDetailStyle';

const ItemDetail=({item,onStock})=>{
    return(
        <div style={detailStyle} key={item.id}>       
            <img style={imgStyle} src={item.img} alt="Detalle de producto" />
            <div style={textContainerStyle}>
                <Description item={item}/>
                {onStock ? <ItemCount stock={item.stock} initial="1" item={item}/> :<h4>Producto fuera de stock</h4>}
            </div>
        </div> 
    )
}
export default ItemDetail;