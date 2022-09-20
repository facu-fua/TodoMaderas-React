import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ItemCounter = (props) => {
    return (
        <div className="itemCounter">
            <Button onClick={() => {
                if (props.counter > 1) {
                    props.setCounter(props.counter - 1)
                }
            }
            }>-</Button>
            <span className="contador">
                {props.counter}
            </span>
            <Button onClick={() => {
                if (props.counter < props.stock)
                    props.setCounter(props.counter + 1)
            }
            }>+</Button>
            <div>
                {props.compra ?
                    (<Button variant="primary" onClick={props.onAdd}>
                        Comprar
                    </Button>
                    ) :
                    (<Link to="/cart">
                        <Button variant="primary">
                            Ir al carrito
                        </Button>
                    </Link>
                    )
                }
            </div>
        </div>
    )
};

export default ItemCounter;

