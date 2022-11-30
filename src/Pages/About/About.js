import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import munna from '../../utilities/about/munna.jpg';
import nayeem from '../../utilities/about/nayeem.jpg';
import zahin from '../../utilities/about/zahin.jpg';
import asme from '../../utilities/about/asme.jpg';
import talha from '../../utilities/about/talha.jpg';


const About = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center text-success'>About Us</h2>
            <p className='text-center'>Here we created this web app.</p>

            <Row xs={1} md={2} className="g-4">
                
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={munna} />
                            <Card.Body>
                                <Card.Title>Mahadi Hasan Munna</Card.Title>
                                <Card.Text>
                                    ID: 203-15-3881 <br />
                                    Responsibility: Frontend and Backend <br />
                                    Technologies: React, Bootstrap, ExpressJs, MongoDB, Firebase
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={nayeem} />
                            <Card.Body>
                                <Card.Title>Nayeemul Hayder Nayeem</Card.Title>
                                <Card.Text>
                                    ID: 203-15-3861 <br />
                                    Responsibility: UX/UI design <br />
                                    Technologies: Sketch, Adobe XD, Figma
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={zahin} />
                            <Card.Body>
                                <Card.Title>Zahin Faisal</Card.Title>
                                <Card.Text>
                                    ID: 203-15-3894 <br />
                                    Responsibility: Frontend <br />
                                    Technologies: HTML, Bootstrap & other 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={asme} />
                            <Card.Body>
                                <Card.Title>Samsun Naher Asme</Card.Title>
                                <Card.Text>
                                    ID: 203-15-3882 <br />
                                    Responsibility: Frontend and other <br />
                                    Technologies: HTML, Bootstrap and other
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={talha} />
                            <Card.Body>
                                <Card.Title>Tuhanur Haque Talha</Card.Title>
                                <Card.Text>
                                    ID: 203-15-3888<br />
                                    Responsibility: Frontend <br />
                                    Technologies: HTML, Bootstrap
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
              
            </Row>
        </div>
    );
};

export default About;