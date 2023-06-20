import categories from "../../../categories.json";
import {linkStyle, categoryListStyle,buttonStyle } from "./CategoryListContainerStyles";
import { Link } from "react-router-dom";

const CategoryListContainer =()=>{
    return(
        <div style={categoryListStyle}>
            <Link style={linkStyle} to={`/`}  >
                <button style={buttonStyle}  key="Inicio">Inicio</button>
            </Link>
            {categories.map((category)=>(
                <Link style={linkStyle} key={category.idCategory}  to={`category/${category.idCategory}`}>
                    <button style={buttonStyle} > {category.name}</button>
                </Link>
         ))}
    </div>
    )
}
export default CategoryListContainer;