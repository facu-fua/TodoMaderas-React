import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Carrito = () => {

    const { carrito, vaciarCarrito, removerProducto } = useContext(CartContext)

    const eventoVaciarCarrito = () => {
        vaciarCarrito()
    }

    const eventoQuitarProducto = (id) =>{
        removerProducto(id)
        console.log(carrito)
    }

    console.log(carrito)

    return (
        <div>
            <h1>Bienvenido al Carrito</h1>
            {carrito.map((producto) => {
                return (
                    <div>
                        <h2>{producto.nombre}</h2>
                        <h2>{producto.precio}</h2>
                        <h2>{producto.cantidad}</h2>
                        <button onClick={()=>{eventoQuitarProducto(producto.id)}}> Quitar producto </button>
                    </div>
                )
            })}
            <div>
                <button onClick={eventoVaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )

};

export default Carrito;