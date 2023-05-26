import { Link } from "react-router-dom";
import { useState } from "react";
const linkStyle={
    color:'white',
    cursor:'pointer'
}
const defaultStyle={
backGroundColor:'white'
}
const hovered={
backGroundColor:'red'
}


const CategoryListContainer =()=>{
    const [isHovered, setIsHovered] = useState(false);
    const categorias =[{idCategoria:1,nombreCategoria:"Aventura"},{idCategoria:2,nombreCategoria:"Terror"}]
    return(
        <div onMouseEnter={() => {setIsHovered(true);console.log(isHovered);}}
        onMouseLeave={() => setIsHovered(false)} style={isHovered ? hovered : defaultStyle}>
            <Link to={`/`} style={linkStyle} >
                <p style={linkStyle} key="Inicio">Inicio</p>
            </Link>
            {categorias.map((categoria)=>(
                
            <Link style={{color:'white'}} to={`category/${categoria.idCategoria}`}>
                <p key={categoria.idCategoria}> {categoria.nombreCategoria}</p>
            </Link>
               
             ))}
        </div>
    )
}
export default CategoryListContainer;