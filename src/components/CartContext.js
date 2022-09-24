import { createContext, useState } from "react";

export const CartContext= createContext();

const CartContextProvider=({children}) => {
    const [cartList, setCartList]= useState([])

    const addItem= (producto)=>{
        setCartList([
            ...cartList,
            producto
        ])
    }

    const IsinCart= (id) => cartList.find(producto=> producto.id === parseInt(id))? true: false;

    const removeItem=(id)=> setCartList(cartList.filter((producto)=>producto.id !== id));

    const clear= ()=>{
        setCartList([])
    }

    return(
    <CartContext.Provider value={{cartList, addItem, clear, IsinCart, removeItem}}>
        {children} 
    </CartContext.Provider>
    );
}

export default CartContextProvider;