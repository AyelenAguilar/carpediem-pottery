import { createContext, useState } from "react";

export const CartContext= createContext();

const CartContextProvider=({children}) => {
    const [cartList, setCartList]= useState([])

    const addItem= (producto,cantidad)=>{
    if(isInCart(producto.id)){
        const index=cartList.findIndex(prod =>prod.id == producto.id);
        cartList[index].cantidad += cantidad;
        setCartList([...cartList])
    }else{
        producto.cantidad= cantidad
        setCartList([...cartList,producto])
    }
    }


    const removeItem=(id)=> setCartList(cartList.filter((producto)=>producto.id !== id));

    const isInCart=(id)=>{
        return cartList.some(prod => prod.id == id)
    }

    const cantidadItemsCarrito = () => { 
        return cartList.reduce((previousValue, producto) => previousValue + producto.cantidad, 0);
    }

    const clear= ()=>{
        setCartList([])
    }

    const prodAgregados=()=>{
        return cartList.reduce((val, carrito)=> val + carrito.cantidad,0)
    }


    const totalCompra=()=>{
        return cartList.reduce((val, carrito)=> val + (carrito.precio*carrito.cantidad),0)
    }

    return(
    <CartContext.Provider value={{cartList, addItem, clear, removeItem, totalCompra, prodAgregados, cantidadItemsCarrito}}>
        {children} 
    </CartContext.Provider>
    );
}

export default CartContextProvider;