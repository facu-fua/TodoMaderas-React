import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ItemCounter = (props) => {
    return (
        <div className="itemCounter">

            {props.compra ?
                (
                    <Button onClick={() => {
                        if (props.counter > props.initial) {
                            props.setCounter(props.counter - 1)
                        }
                    }
                    }>-</Button>) : ""}

            <span className="contador">
                {props.counter}
            </span>

            {props.compra ?
                (
                    <Button onClick={() => {
                        if (props.counter < props.stock)
                            props.setCounter(props.counter + 1)
                    }
                    }>+</Button>) : ""}

            <div>
                {props.compra ?
                    (<Button variant="primary" onClick={props.onAdd}>
                        Comprar
                    </Button>
                    ) :
                    (
                        <div>
                            <Link to="/">
                                <Button variant="primary">
                                    Seguir Comprando
                                </Button>
                            </Link>
                            <Link to="/cart">
                                <Button variant="primary">
                                    Ir al carrito
                                </Button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default ItemCounter;

