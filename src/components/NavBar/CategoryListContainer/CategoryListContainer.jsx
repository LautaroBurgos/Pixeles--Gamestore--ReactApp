import { Link } from "react-router-dom";
import categories from "../../../categories.json";
const linkStyle={
    color:'white',
    cursor:'pointer',
    marginLeft:'10px',
    marginRight:'10px'
}
const categoryListStyle={
    display:'flex'
}

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