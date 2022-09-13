import ItemCount from "./ItemCount";

const ItemListContainer=(props)=>{
    const cantidad= (id)=>{
        alert(`Agregó ${id} productos al carrito`);

    }

    return(
    <div>
    <div>{props.greeting}</div>
    <ItemCount
    titulo="Taza de gatito"
    
    cantidad={cantidad}
    id={1}
    
    />
    </div>
    );
}

export default ItemListContainer;