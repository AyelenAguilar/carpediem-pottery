import { createContext, useState } from "react";

export const CartContext= createContext();

const CartContextProvider=({children}) => {
    const [cartList, setCartList]= useState([])

    const addItem= (producto,cantidad)=>{
        setCartList([
            ...cartList,
            producto,cantidad
        ])
    }


    const removeItem=(id)=> setCartList(cartList.filter((producto)=>producto.id !== id));

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