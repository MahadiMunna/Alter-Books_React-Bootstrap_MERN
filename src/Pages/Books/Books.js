import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Books = ({ singleBook }) => {
    const { book, price, writer, type, img } = singleBook;
    return (
        <Col>
            <Card>
                <Card.Img style={{height:"300px"}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{fontSize:'18px'}}>{book}</Card.Title>
                    <Card.Text>
                        <p>Writer: {writer} <br />Category: {type} <br />Price: {price} BDT </p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button>Borrow</button>
                    <button>Buy</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Books;