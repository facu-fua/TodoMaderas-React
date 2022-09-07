import { useEffect } from "react";
import { useState } from "react";
import ProductList from "../components/productList/productList"

const ProductListContainer = () =>{
    const [productos, setProductos] = useState([])
    const productFetch = async () =>{
        try {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=silla%20madera");
            const data = await response.json();
            setProductos(data.results.splice(0,10))
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
        <div className="productList">
            <ProductList productos={productos}/>
        </div>
    )
}

export default ProductListContainer;