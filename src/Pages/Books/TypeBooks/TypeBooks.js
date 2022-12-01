import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Books from '../Books';

const TypeBooks = () => {
    const [books, setBooks] = useState([]);
    const { type } = useLoaderData();
    console.log(type)
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                const selectedBooks = data.filter(selectedBook => selectedBook.type === type);
                setBooks(selectedBooks);
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-success mt-4 mb-4'>Books of {type}</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    books.map(book=><Books key={book._id} singleBook={book}></Books>)
                }
            </Row>
        </div>
    );
};

export default TypeBooks;