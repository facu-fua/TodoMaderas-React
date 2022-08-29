const { useState } = require("react");

const ItemCounter = () =>{
    const [counter, setCounter] = useState(1);
    let stock = 10;
    return(
        <div className="itemCounter">
            <button onClick={() =>
            {if (counter>1){
                setCounter(counter - 1)}}
                }>-</button>
            <span className="contador">
                {counter}
            </span>
            <button onClick={() =>{
                if (counter<stock)
                setCounter(counter + 1)}
                }>+</button>
        </div>
    )
};

export default ItemCounter;

