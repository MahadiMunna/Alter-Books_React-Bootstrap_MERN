import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useTitle from '../../../Hooks/useTitle';
import Books from '../Books';

const AllBooks = () => {
    useTitle('Books')
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            })
    }, [])
    return (
            <div>
            <h2 className='text-center text-success mt-4 mb-4'>Available Books</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    books.map(book=><Books key={book._id} singleBook={book}></Books>)
                }
            </Row>
        </div>
    );
};

export default AllBooks;