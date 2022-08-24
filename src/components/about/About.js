import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import about from "../../assets/images/about.png"
import './about.css'

const About = () => {

    return (
        <section className='About'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="img">
                            <img src={about} alt="about" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="right">
                            <h6>About Us</h6>
                            <p>
                                We understand how difficult it can be changing habits. Eating healthier, exercising more, doing the right thing for your body and mind – it doesn’t come easy.
                                With Army Gymnastics, we give you all the information, access to resources, and tools to make your transition to a healthier you smoother.
                                Our goal is to help you lose weight, get fit and healthy, and start living life on your own terms. And we want it to be as simple and as stress-free as possible.
                            </p>
                            <button>About us</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About