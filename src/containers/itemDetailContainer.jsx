import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail/itemDetail"
import { ProductosContext } from "../context/productosContext";


const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams();
    const { productos } = useContext(ProductosContext)
    const [id, setId] = useState(itemId)

    const itemFirestore = () => {
            const db = getFirestore();
            const itemRef = doc(db, "productos", id);
            getDoc(itemRef).then((snapshot) => {
                const newItem = {
                    id: snapshot.id,
                    ...snapshot.data()
                }
                setItemDetail(newItem)
                setLoading(true)
            })
        }

    useEffect(() => {
        itemFirestore()
    }, [])

    if (loading === false) {
        return (
            <h1>Espere unos momentos...</h1>
        )
    } else {
        return (
            <div>
                <ItemDetail item={itemDetail} />
            </div>
        )
    }
};

export default ItemDetailContainer;