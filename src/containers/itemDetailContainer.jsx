import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail"


const ItemDetailContainer = () =>{
    const [itemDetail, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams();

    const itemFetch = async () =>{
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=muebles%20de%20madera`);
            const data = await response.json();
            setItem(data.results.find(element => element.id === itemId))
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