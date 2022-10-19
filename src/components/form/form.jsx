import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";

const Form = () => {
    const { carrito, total, vaciarCarrito } = useContext(CartContext)
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const [orderId, setOrderId] = useState()
    const [errores, setErrores] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)

    const sendOrder = (e) => {
        e.preventDefault();
        setErrores(validateForm(form));
        if(Object.keys(errores).length === 0 && form.name!==""){
            setIsSubmit(true);
            const order = {
                buyer: form,
                items: carrito,
                date: Date(),
                total: total()
            };
            const db = getFirestore();
            const ordersCollection = collection(db, "ordenes");
            addDoc(ordersCollection, order).then((snapshot) => setOrderId(snapshot.id));
            vaciarCarrito()
        }
    }

    const eventoChange = (e) => {
        const newForm = { ...form, [e.target.name]: e.target.value }
            setForm(newForm)
        }
            

    const validateForm = (values) =>{
        const error = {}
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!values.name){
            error.name = "Es necesario que ingrese su nombre!";
        }else if(values.name.length<5 || values.name.length>20){
            error.name = "Ingrese un nombre valido!";
        };
        if(!values.email){
            error.email = "Es necesario que ingrese su email!";
        }else if (!regex.test(values.email)){
            error.email = "El email no es valido!"
        };
        if(!values.phone){
            error.phone = "Es necesario que ingrese su numero telefonico!";
        }else if(values.phone.length<10 || values.phone.length>15){
            error.phone = "El numero ingresado no es valido!";
        };
        return error;
    }

            return (
                <div>
                    {isSubmit===false? (
                        <>
                            <h2>Ingrese sus datos:</h2>
                            <form  onSubmit={sendOrder}>
                                <div id="form">
                                    <div>
                                        <label htmlFor="name">Usuario:</label>
                                        <input type="text" name="name" id="name" onChange={eventoChange} value={form.name} />
                                    </div>
                                    <p>{errores.name}</p>
                                    <div>
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" name="email" id="email" onChange={eventoChange} value={form.email} />
                                    </div>
                                    <p>{errores.email}</p>
                                    <div>
                                        <label htmlFor="phone">Numero de telefono:</label>
                                        <input type="text" name="phone" id="phone" onChange={eventoChange} value={form.phone} />
                                    </div>
                                    <p>{errores.phone}</p>
                                    <div>
                                        <input type="submit" value="Finalizar Compra" />
                                    </div>
                                </div>
                            </form>
                        </>) :
                        (
                            <>
                                <h2>Su compra se a realizado con exito! El id de orden es: {orderId}</h2>
                            </>
                        )
                    }
                </div>
            )
};

export default Form;