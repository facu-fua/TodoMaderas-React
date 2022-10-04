import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";

const Form = () => {
    const { carrito, total } = useContext(CartContext)
    const [carritoOrden, setCarritoOrden] = useState([]) //rearmar carrito sin imagen
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const [orderId, setOrderId] = useState()

    const sendOrder = (e) => {
        /* carrito.forEach((item)=>{
            setCarritoOrden([...carritoOrden,{
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.cantidad
            }])
        }) */
        e.preventDefault()
        const order = {
            buyer: form,
            items: carrito,
            date: Date(),
            total: total()
        }
        const db = getFirestore();
        const ordersCollection = collection (db, "ordenes");
        addDoc(ordersCollection, order).then((snapshot) => setOrderId(snapshot.id));
    }

    const eventoChange = (e) => {
        const newForm = { ...form, [e.target.name]: e.target.value }
        setForm(newForm)
    }


    return (
        <div>
            {orderId === undefined ? (
                <>
                    <h2>Formulario</h2>
                    <form action="">
                        <div id="form">
                            <div>
                                <label htmlFor="name">Usuario:</label>
                                <input type="text" name="name" id="name" onChange={eventoChange} value={form.name} />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" onChange={eventoChange} value={form.email} />
                            </div>
                            <div>
                                <label htmlFor="phone">Numero de telefono:</label>
                                <input type="text" name="phone" id="phone" onChange={eventoChange} value={form.phone} />
                            </div>
                            <div>
                                <input type="submit" value="Finalizar Compra" onClick={sendOrder} />
                            </div>
                        </div>
                    </form>
                </>) :
                (
                    <>
                        <h2>Su compra se a realizado con exito, el id es {orderId}</h2>
                    </>
                )
            }
        </div>
    )
};

export default Form;