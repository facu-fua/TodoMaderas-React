import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/productList/productList"

const ProductListContainer = () =>{

    const {categoryId} = useParams();
    const [productos, setProductos] = useState([])

    const productFetch = async () =>{
        try {

            /* Con un condicional establezco a donde hago el fetch, ya sea a una api dinamica o una preestablecida
            (esto es temporal) */
            let response = []
            if(categoryId === undefined || categoryId === "Capital Federal" || categoryId === "Buenos Aires"){
                response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=muebles%20de%20madera")
            }else{
                response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}`)
            }

            const data = await response.json();

            /* Luego el valor de productos sera acorde al categoryId y muestre los productos del home(undefined),
            por categoria, o api dinamica */
            if (categoryId===undefined){
                setProductos(data.results)
            }else if(categoryId === "Capital Federal" || categoryId === "Buenos Aires"){
                setProductos(data.results.filter(
                    element => element.address.state_name === categoryId
                ))
            }else {
                setProductos(data.results)
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