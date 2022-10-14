import "../App.css";
import { Link } from "react-router-dom";

const Item=({producto})=>{
    return (
        <div >
        <div className="cards">
            <h3 className="cards-titulo">{producto.titulo}</h3>
            <img className="img" src={producto.imagen} alt="imagenes productos item"></img>
            <p className="precio">${producto.precio}</p>
            <p className="stock">Stock disponible:{producto.stock}</p>
            <Link to={"/item/"+producto.id} className="btn-detalles">Ver detalles</Link>
        </div>
        </div>
    )
}

export default Item;