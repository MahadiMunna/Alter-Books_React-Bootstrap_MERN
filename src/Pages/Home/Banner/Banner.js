import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../../utilities/carousel/carousel1.jpg'
import carousel2 from '../../../utilities/carousel/carousel2.jpg'
import carousel3 from '../../../utilities/carousel/carousel3.jpg'

const Banner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Carousel style={{height:'480px', width:'720px'}} className="shadow-lg p-3 mb-5 bg-body rounded">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-black bg-light shadow-lg p-3 mb-5 bg-body rounded'>
                        <h3 className='text-success fw-bold'>Borrow Your Book!</h3>
                        <p className='fw-bold text-primary'>Are you looking for a book? Got it here? Don't be late. Borrow it now!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-black bg-light shadow-lg p-3 mb-5 bg-body rounded'>
                        <h3 className='text-success fw-bold'>Buy Your Book!</h3>
                        <p className='fw-bold text-primary'>Do you need any book? Is it available here? Buy it now or if it is not available order it now!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-black bg-light shadow-lg p-3 mb-5 bg-body rounded'>
                        <h3 className='text-success fw-bold'>Publish Your Book!</h3>
                        <p className='fw-bold text-primary'>Do you want to publish a book? contact with us. We are here for you. Publish your book easily!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;