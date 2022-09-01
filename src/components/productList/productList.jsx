import { useEffect, useState } from "react";
import ItemCard from "../card/card"

const ProductList = () =>{
    const [productos, setProductos] = useState([])
    const productFetch = async () =>{
        try {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=silla%20madera");
            const data = await response.json();
            setProductos(data.results.splice(10))
            console.log(productos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            productFetch();
        }, 2000);
    },[])
    
    return(
        productos.map((producto, index)=>{
            return(
            <ItemCard key={index} id={producto.id} title={producto.title} price={producto.price} thumbnail={producto.thumbnail}/>
            )
        })
    )
    
}

export default ProductList;