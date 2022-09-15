import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ItemCounter = (props) => {

    let setCompra = 0
    return (
        <div className="itemCounter">
            <Button onClick={() => {
                if (props.compra > 1) {
                    props.setCompra(props.compra - 1)
                }
            }
            }>-</Button>
            <span className="contador">
                {props.compra}
            </span>
            <Button onClick={() => {
                if (props.compra < props.stock)
                    props.setCompra(props.compra + 1)
            }
            }>+</Button>
            <div>
                <Link to="/cart">
                    <Button variant="primary" onClick={props.onAdd}>
                        Comprar
                    </Button>
                </Link>
            </div>
        </div>
    )
};

export default ItemCounter;

