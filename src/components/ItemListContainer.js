import ItemCount from "./ItemCount";

const ItemListContainer=(props)=>{
    
    return(
    <div>
    <div>{props.greeting}</div>
    <ItemCount
    titulo="Taza de gatito"
    />
    </div>
    );
}

export default ItemListContainer;