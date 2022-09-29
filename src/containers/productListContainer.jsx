import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/productList/productList"
import { ProductosContext } from "../context/productosContext";

const ProductListContainer = () => {
    const { categoryId } = useParams();
    const { setCategoryId } = useContext(ProductosContext)
    setCategoryId(categoryId)
    
    return (
        <div className="productList">
            <ProductList/>
        </div>
    )
}
export default ProductListContainer;