import "../App.css";

const Item=({producto})=>{
    return (
        <div >
        <div className="cards">
            <h3 className="cards-titulo">{producto.titulo}</h3>
            <img className="img" src={producto.imagen}></img>
            <p className="precio">${producto.precio}</p>
            <p className="stock">Stock disponible:{producto.stock}</p>
            <button className="btn-detalles">Ver detalles</button>
        </div>
        </div>
    )
}

export default Item;