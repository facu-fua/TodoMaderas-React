import { useContext } from "react"
import { ProductosContext } from "../../context/productosContext"
import ItemCard from "../card/card"



const ProductList = () =>{
    const { productos} = useContext(ProductosContext)
    return(
        productos.map((producto, index)=>{
            return(
            <ItemCard key={index} id={producto.id} title={producto.title} price={producto.price} image={producto.image} category={producto.categoryId}/>
            )
        })
    )
    
}

export default ProductList;