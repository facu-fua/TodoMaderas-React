import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ProductosContext = React.createContext()

const ProductosProvider = ({ children }) => {
    const [productoId, setProductoId] = useState("")
    const [categoryId, setCategoryId] = useState()
    const [productos, setProductos] = useState([])

    const firebaseFetch = () => {
        const db = getFirestore();
        const items = collection(db, "productos");
        if (categoryId === undefined) {
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(docs)
            })
        } else {
            const filtrado = query(items, where("categoryId", "==", categoryId));
            getDocs(filtrado).then((snapshot) => {
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