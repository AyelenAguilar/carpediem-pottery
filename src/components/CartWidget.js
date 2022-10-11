import {AiOutlineShoppingCart} from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget=()=>{

    const { cantidadItemsCarrito } = useContext(CartContext);
    return(
        <>
        <AiOutlineShoppingCart/>
        <p className="hiddenCarrito" hidden={cantidadItemsCarrito()===0}>{cantidadItemsCarrito()}</p>
        </>
    )
}

export default CartWidget;