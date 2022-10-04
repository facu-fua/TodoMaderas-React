import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const Carrito = () => {

    const { carrito, vaciarCarrito, removerProducto, total } = useContext(CartContext)

    const eventoVaciarCarrito = () => {
        vaciarCarrito()
    }

    const eventoQuitarProducto = (id) => {
        removerProducto(id)
    }

    return (
        <div id="carrito">
            <h1>Tus productos en el Carrito:</h1>
            {carrito.length > 0 ?
                <>{carrito.map((producto) => {
                    return (
                        <div key={producto.id}>
                            <div className="itemCarrito">
                                <img src={producto.imagen} alt="" />
                                <h4>{producto.nombre}</h4>
                                <div className="precio">
                                    <h4>${producto.precio}</h4>
                                    <h4>x {producto.cantidad}</h4>
                                </div>
                                <Button onClick={() => { eventoQuitarProducto(producto.id) }}> Quitar producto</Button>
                            </div>
                            <div>
                                <hr />
                            </div>
                        </div>
                    )
                })}
                    <div>
                        <h3>Precio total: ${total()}</h3>
                        <Button onClick={eventoVaciarCarrito}>Vaciar Carrito</Button>
                        <Link to="/form">
                            <Button>Continuar</Button>
                        </Link>
                        
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