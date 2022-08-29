import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../itemCounter';

function ItemCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt=""/>
            <Card.Body>
                <Card.Title>Silla Basica</Card.Title>
                <Card.Text>
                    Una confortable silla de madera.
                </Card.Text>
                <ItemCounter/>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;