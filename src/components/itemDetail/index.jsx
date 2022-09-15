import { useState } from "react";
import ItemCounter from "../itemCounter";

const ItemDetail = (prop) => {
    const item = prop.item
    const [compra, setCompra] = useState(0)
    const carrito = []

    const onAdd = () => {
        carrito.push(compra)
    }

    return (
        <div className="detalles">
            <img src={item.thumbnail} alt="" />
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
            <h5>Condicion: "{item.attributes[1].value_name}"</h5>
            <p>Vendidos: {item.sold_quantity}</p>
            <ItemCounter initial={1} stock={10} onAdd={onAdd} compra={compra} setCompra={setCompra}/>
        </div>
    )
};

export default ItemDetail;