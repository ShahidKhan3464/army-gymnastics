import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import sportShoes from "../../assets/images/sport-shoes.png"
import punchBag from "../../assets/images/punch-bag.png"
import yogaMat from "../../assets/images/yogamat.png"
import './shop.css'

const Shop = () => {

    return (
        <section className='Shop'>
            <div className="title">
                <h3>Shop</h3>
            </div>
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="item">
                            <div className="img">
                                <img src={sportShoes} alt="sportShoes" />
                            </div>
                            <div className="item-body">
                                <div className="item-title">
                                    <h6>SPORT SHOES</h6>
                                </div>
                                <div className="item-price">
                                    <p>$20.00</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="item">
                            <div className="img">
                                <img src={punchBag} alt="punchBag" />
                            </div>
                            <div className="item-body">
                                <div className="item-title">
                                    <h6>PUNCH BAG</h6>
                                </div>
                                <div className="item-price">
                                    <p><span className='old-price'>$16.00</span>$20.00</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="item">
                            <div className="img">
                                <img src={yogaMat} alt="yogaMat" />
                            </div>
                            <div className="item-body">
                                <div className="item-title">
                                    <h6>YOGA MAT</h6>
                                </div>
                                <div className="item-price">
                                    <p>$40.00</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Shop