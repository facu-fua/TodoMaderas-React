import ItemCard from "../card/card"

const ProductList = (prop) =>{
    const productos = prop.productos
    return(
        productos.map((producto, index)=>{
            return(
            <ItemCard key={index} id={producto.id} title={producto.title} price={producto.price} thumbnail={producto.thumbnail}/>
            )
        })
    )
    
}

export default ProductList;