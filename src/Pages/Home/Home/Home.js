import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import Books from '../../Books/Books';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    useTitle('Home')
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
            <Banner></Banner>
            <div>
            <h2 className='text-center text-success mt-4 mb-4'>Available Books</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    books.slice(0, 6).map(book=><Books key={book._id} singleBook={book}></Books>)
                }
            </Row>
            <div className='text-center mt-5'>
                <button type="button" class="btn btn-success"><Link className='button' to='/all-books'>View All</Link></button>
            </div>
        </div>
        </div>
    );
};
export default Home;