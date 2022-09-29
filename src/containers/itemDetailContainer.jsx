import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail"
import { ProductosContext } from "../context/productosContext";


const ItemDetailContainer = () =>{
    const [itemDetail, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams();
    const { productos, setCategoryId } = useContext(ProductosContext)
    setCategoryId(itemId)

    const itemFetch =() =>{
            setItem(productos.find(element => element.id === itemId))
            setLoading(true)
    };

    useEffect(()=>{
        itemFetch()
    },[]);

        if(loading){
            return(
                <div>
                    <ItemDetail item={itemDetail}/>
                </div>
            )
        }
};

export default ItemDetailContainer;