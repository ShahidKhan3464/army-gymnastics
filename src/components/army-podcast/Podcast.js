import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import podcast from "../../assets/images/podcast.png"
import './podcast.css'

const Podcast = () => {

    return (
        <section className='Podcast'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="left">
                            <h6>Download the Army Gymnastics Podcast</h6>
                            <p>
                                The Army Gymnastics Podcast is the perfect way to stay motivated and on track with your health goals. Hear unique insights from fitness experts, recipes for healthy meals, tips about how to balance work and exercising at home or in a studio - all while having fun! Join our community of like-minded people who are striving towards their wellness journey together
                            </p>
                            <button>Subscribe to the post card</button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="img">
                            <img src={podcast} alt="podcast" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Podcast