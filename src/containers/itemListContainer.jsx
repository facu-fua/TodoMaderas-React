const ItemListContainer = (props) =>{
    return (
        <div>
            <h1>{props.greeting}</h1>
            <h5 style={{textDecoration: "underline"}}>Productos en madera de calidad</h5>
        </div>
        
    )
};

export default ItemListContainer;