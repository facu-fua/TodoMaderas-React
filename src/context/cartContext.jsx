import React, { useState } from "react";

const CartContext = React.createContext()

const CartContextProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    const agregarProducto =(item, cantidad) =>{
        const yaExiste = existeEnCarrito(item)
        if(yaExiste){
            const index = carrito.findIndex(producto=>producto.id===item.id)
            carrito[index].cantidad = yaExiste.cantidad + cantidad
        }else{
            setCarrito([...carrito, {
                id: item.id,
                nombre: item.title,
                precio: item.price,
                cantidad: cantidad
            }])
        }
    }

    const removerProducto = (id) =>{
        setCarrito(carrito.filter(producto => producto.id !== id))
    }

    const existeEnCarrito = (item) =>{
        return carrito.find(producto=>producto.id === item.id)
    }
    
    const total = () =>{
        let valor = 0;
        carrito.forEach((producto) => {
            valor = valor + (producto.precio * producto.cantidad)
        });
        return valor;
    }

    return(
        <CartContext.Provider value={{carrito, vaciarCarrito, agregarProducto, removerProducto, existeEnCarrito, total }}>
            {children}
        </CartContext.Provider>
    )
};

export {CartContextProvider, CartContext};
