import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import munna from '../../utilities/about/munna.jpg';
import useTitle from '../../Hooks/useTitle';


const About = () => {
    useTitle('About');
    return (
        <div className='mt-5'>
            <h2 className='text-center text-success'>About</h2>
            <p className='text-center'>Here I have created this web app.</p>

            <Row >
                
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={munna} />
                            <Card.Body>
                                <Card.Title className='text-center fs-2'>Mahadi Hasan Munna</Card.Title>
                                <Card.Text className='text-center fw-semibold fs-5'>
                                    Responsibility: Frontend and Backend <br />
                                    Technologies: React, Bootstrap, ExpressJs, MongoDB, Firebase
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
              
            </Row>
        </div>
    );
};

export default About;