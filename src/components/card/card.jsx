import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ProductosContext } from '../../context/productosContext';

function ItemCard(props) {
    const { setCategoryId } = useContext(ProductosContext)

    return (
        <Card id={props.id} style={{ width: '18rem' }}>
            <Button variant="dark">
                <Link to={`/item/${props.id}`}>
                    <Card.Img className='imgItem' variant="top" src={props.image} alt="" />
                </Link>
            </Button>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>${props.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;