import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import track from "../../assets/images/track.svg"
import logging from "../../assets/images/logging.png"
import motivation from "../../assets/images/motivation.png"
import CardData from "../cardData/CardData"

const Cards = () => {

    const createData = (img, title, text) => {
        return { img, title, text };
    }

    const cards = [
        createData(track, "Learn. Track", "Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals."),
        createData(logging, "Logging Simplified", "Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking."),
        createData(motivation, "Stay Motivated", "Join the World’s Largest Fitness Community for advice, tips, and support 24/7."),
    ];

    return (
        <section className='Cards' style={{ margin: "110px 0" }}>
            <Container>
                <Row>
                    {cards.map((card, index) => {
                        return (
                            <Col key={index} lg={4} md={6}>
                                <CardData
                                    img={card.img}
                                    title={card.title}
                                    text={card.text}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Cards