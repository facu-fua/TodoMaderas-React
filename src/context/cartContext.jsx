import React, { useState } from "react";

const CartContext = React.createContext()

const CartContextProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    const agregarProducto =(item, cantidad) =>{
        setCarrito([...carrito, {
            id: item.id,
            nombre: item.title,
            precio: item.price,
            cantidad: cantidad
        }])
    }

    const removerProducto = (id) =>{
        const index = carrito.findIndex(item => item.id===id)
        console.log(index)
        setCarrito(carrito.splice(index,1))
    }

    const existeEnCarrito = (id) =>{
        const existe = carrito.find(producto=>producto.id === id)
    }

    return(
        <CartContext.Provider value={{carrito, vaciarCarrito, agregarProducto, removerProducto, existeEnCarrito }}>
            {children}
        </CartContext.Provider>
    )
};

export {CartContextProvider, CartContext};