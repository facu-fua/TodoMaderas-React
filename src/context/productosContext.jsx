import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ProductosContext = React.createContext()

const ProductosProvider = ({ children }) => {

    const [categoryId, setCategoryId] = useState()
    const [productos, setProductos] = useState([])
    const [categoria, setCategoria] = useState("sillas")
    console.log(categoryId)

    //Hace falta hacer dinamico el cambio de categoria acorde a la eleccion de link

    const firebaseFetch = () => {
        const db = getFirestore();
        const items = collection(db, "productos");
        const filtrado = query(items, where("categoryId", "==", categoria));
        if (categoryId === "sillas") {
            getDocs(filtrado).then((snapshot) => {
                const docs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(docs)
            })
        } else {
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(docs)
            })
        }
    }

    useEffect(() => {
        firebaseFetch()
    }, [categoryId])

    return (
        <ProductosContext.Provider value={{ productos, setCategoryId }}>
            {children}
        </ProductosContext.Provider>
    )
}

export { ProductosProvider, ProductosContext };