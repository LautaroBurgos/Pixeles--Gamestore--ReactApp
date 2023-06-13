import Card from '../Card/Card';
const ItemList =({items})=>{
    return(
        items.map((item)=>(
            <Card key={item.id} item={item}></Card>
         ))
    )
}
export default ItemList;