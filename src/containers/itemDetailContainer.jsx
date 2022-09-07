import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../components/itemDetail"


const ItemDetailContainer = () =>{
    const [itemDetail, setItem] = useState([])
    const itemFetch = async () =>{
        try {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=silla%20madera");
            const data = await response.json();
            setItem(data.results)
            console.log(data.results)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        itemFetch()
    },[]);

    return(
        <div>
            <ItemDetail item={itemDetail}/>
        </div>
    )
};

export default ItemDetailContainer;