import { CountButtonStyle,ContainerStyle,CountStyle } from "./ItemQuantitySelectorStyles";

const ItemQuantitySelector=({validarCantidadRestar,validarCantidadSumar,stockInt,count})=>{
    return(
        <div style={ContainerStyle}>              
            <button style={CountButtonStyle} onClick={() => validarCantidadRestar(count)}>-</button>
                <p style={CountStyle}> {count}</p>
            <button style={CountButtonStyle} onClick={() =>validarCantidadSumar(count,stockInt) }>+</button>
        </div>
    )
}
export default ItemQuantitySelector;