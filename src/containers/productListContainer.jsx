import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/productList/productList"

const ProductListContainer = () =>{

    const {categoryId} = useParams();
    const [productos, setProductos] = useState([])

    const productFetch = async () =>{
        try {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=muebles%20de%20madera") 
            const data = await response.json();
            if (categoryId===undefined){
                setProductos(data.results)
            }else if(categoryId === "Capital Federal" || categoryId === "Buenos Aires"){
                setProductos(data.results.filter(
                    element => element.address.state_name === categoryId
                ))
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
            productFetch();
    },[categoryId])

    return(
        <div className="productList">
            <ProductList productos={productos}/>
        </div>
    )
}
export default ProductListContainer;