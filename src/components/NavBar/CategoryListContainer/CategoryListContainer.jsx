import categories from "../../../categories.json";
import { categoryListStyle,linkStyle } from "./CategoryListContainerStyles";
import { Link } from "react-router-dom";

const CategoryListContainer =()=>{
    return(
        <div style={categoryListStyle}>
            <Link  to={`/`} style={linkStyle} >
                <p  key="Inicio">Inicio</p>
            </Link>
            {categories.map((category)=>(
                <Link key={category.idCategory} style={linkStyle} to={`category/${category.idCategory}`}>
                    <p > {category.name}</p>
                </Link>
         ))}
    </div>
    )
}
export default CategoryListContainer;