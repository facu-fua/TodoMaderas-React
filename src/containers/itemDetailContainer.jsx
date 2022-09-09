import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../components/itemDetail"


const ItemDetailContainer = () =>{
    const [itemDetail, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    const itemFetch = async () =>{
        try {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=silla%20madera");
            const data = await response.json();
            setItem(data.results)
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        itemFetch()
    },[]);

        if(loading){
            return(
                <div>
                    <ItemDetail item={itemDetail}/>
                </div>
            )
        }
};

export default ItemDetailContainer;