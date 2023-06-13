import { divStyle,BriefCardStyle, BriefContainer } from "./BriefStyles";

const Brief=({order})=>{
    return(
        <div style={{display:'flex',justifyContent:'center'}} >
            <div style={BriefContainer} >
                <h2>Detalle de compra</h2>
                <h4>Comprador : {order.buyer.name}</h4>
                <div style={divStyle}>
                {   
                    order.items.map((cartItem)=>(
                        <div style={BriefCardStyle} key={cartItem.id} >
                            <h4>{cartItem.item.name}</h4>
                            <h4>Unidad/es: {cartItem.qty}</h4>
                            <h4>Precio x unidad : ${cartItem.item.price}</h4>
                        </div>
                    ))
                }
                </div>         
            </div>
        </div>
    )
}
export default Brief;