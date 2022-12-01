import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Books from "../Books";

const WriterBooks = () => {
    const [books, setBooks] = useState([]);
    const { writer } = useLoaderData();
    console.log(writer)
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                const selectedBooks = data.filter(selectedBook => selectedBook.writer === writer);
                setBooks(selectedBooks);
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-success mt-4 mb-4'>Books of {writer}</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    books.map(book=><Books key={book._id} singleBook={book}></Books>)
                }
            </Row>
        </div>
    );
};

export default WriterBooks;