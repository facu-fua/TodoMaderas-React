import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import ItemCounter from "../itemCounter/itemCounter";

const ItemDetail = (prop) => {
    const item = prop.item
    const [counter, setCounter] = useState(1)
    const [compra, setCompra] = useState(true)
    const { agregarProducto } = useContext(CartContext)

    const onAdd = () => {
        setCompra(false)
        agregarProducto(item,counter)
    }

    return (
        <div className="detalles">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
            <ItemCounter initial={1} stock={item.stock} onAdd={onAdd} counter={counter} setCounter={setCounter} compra={compra} />
        </div>
    )
};

export default ItemDetail;