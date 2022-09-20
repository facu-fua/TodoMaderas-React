import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import ItemCounter from "../itemCounter";

const ItemDetail = (prop) => {
    const item = prop.item
    const [counter, setCounter] = useState(0)
    const [compra, setCompra] = useState(true)
    const { agregarProducto } = useContext(CartContext)

    const onAdd = () => {
        setCompra(false)
        agregarProducto(item,counter)
    }

    return (
        <div className="detalles">
            <img src={item.thumbnail} alt="" />
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
            <h5>Condicion: "{item.attributes[1].value_name}"</h5>
            <p>Vendidos: {item.sold_quantity}</p>
            <ItemCounter initial={1} stock={10} onAdd={onAdd} counter={counter} setCounter={setCounter} compra={compra} />
        </div>
    )
};

export default ItemDetail;