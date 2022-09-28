import Item from "./Item";

const ItemList=({productos})=>{
    
    return(
        <>
        {
        productos.length > 0
        ? productos.map((producto)=> <Item key={producto.id} producto={producto}/>)
        : <p>...cargando</p>
        }
        </>
    );
}

export default ItemList;