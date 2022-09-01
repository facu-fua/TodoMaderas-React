import Card from 'react-bootstrap/Card';
import ItemCounter from '../itemCounter';

function ItemCard(props) {
    return (
        <Card id={props.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnail} alt=""/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <ItemCounter initial={1} stock={10}/>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;