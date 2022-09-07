import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../itemCounter';

function ItemCard(props) {
    const onAdd = (counter) =>{
        alert (counter===1?"Se agrego "+ counter +" item al carrito" : "Se agregaron "+ counter +" items al carrito")
    }
    return (
        <Card id={props.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnail} alt=""/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <ItemCounter initial={1} stock={10} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;