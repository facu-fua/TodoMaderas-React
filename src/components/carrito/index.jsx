import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Carrito = () => {

    const { carrito, vaciarCarrito, removerProducto, total } = useContext(CartContext)

    const eventoVaciarCarrito = () => {
        vaciarCarrito()
    }

    const eventoQuitarProducto = (id) =>{
        removerProducto(id)
    }

    return (
        <div>
            <h1>Bienvenido al Carrito</h1>
            {carrito.length>0 ? 
            <>{carrito.map((producto) => {
                return (
                    <div>
                        <h2>{producto.nombre}</h2>
                        <h2>${producto.precio}</h2>
                        <h2>{producto.cantidad}</h2>
                        <button onClick={()=>{eventoQuitarProducto(producto.id)}}> Quitar producto </button>
                    </div>
                )
            })}
            <div>
                <h2>Precio total: ${total()}</h2>
                <button onClick={eventoVaciarCarrito}>Vaciar Carrito</button>
            </div>
            </>
            : 
            <div>
                <h3>El carrito esta vacio</h3>
            </div>}
        </div>
        )

};

export default Carrito;