function ItemCount({stock,initial,onAdd}){
    let cantidad={initial};
    const [count, setCount] = useState(initial);
    return (
        <div>
           <div>
                <button onClick={() => setCount(count - 1)}>-</button>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
           </div>
            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}