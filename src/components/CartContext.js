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


    const clear= ()=>{
        setCartList([])
    }

    return(
    <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
        {children} 
    </CartContext.Provider>
    );
}

export default CartContextProvider;