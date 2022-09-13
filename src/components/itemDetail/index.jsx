const ItemDetail = (prop) => {
    const item = prop.item
    console.log(item)
    return (
        <div className="detalles">
            <img src={item.thumbnail} alt="" />
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
            <h5>Condicion: "{item.attributes[1].value_name}"</h5>
            <p>Vendidos: {item.sold_quantity}</p>
        </div>
    )
};

export default ItemDetail;