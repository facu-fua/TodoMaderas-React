import Button from 'react-bootstrap/Button';

const { useState } = require("react");

const ItemCounter = (props) =>{
    const [counter, setCounter] = useState(props.initial);
    const onAdd = () =>{
        alert (counter===1?"Se agrego "+ counter +" item al carrito" : "Se agregaron "+ counter +" items al carrito")
    }
    return(
        <div className="itemCounter">
            <Button onClick={() =>
            {if (counter>1){
                setCounter(counter - 1)}}
                }>-</Button>
            <span className="contador">
                {counter}
            </span>
            <Button onClick={() =>{
                if (counter<props.stock)
                setCounter(counter + 1)}
                }>+</Button>
                <div>
                <Button variant="primary" onClick={onAdd}>Agregar al Carrito</Button>
                </div>
        </div>
    )
};

export default ItemCounter;

