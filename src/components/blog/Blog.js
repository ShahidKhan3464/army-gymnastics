import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"
import blog3 from "../../assets/images/blog3.png"
import blog4 from "../../assets/images/blog4.png"
import blog5 from "../../assets/images/blog5.png"
import blog6 from "../../assets/images/blog6.png"
import BlogCard from '../blog-card/BlogCard'

const Blog = () => {

    const titleStyle = {
        fontSize: '50px',
        color: '#3A4856',
        fontWeight: '700',
        lineHeight: '61px',
        textAlign: 'center',
        marginBottom: '80px',
    }

    const createData = (img, title, text, date) => {
        return { img, title, text, date };
    }

    const cards = [
        createData(blog1, "YAMAS AND NIYAMAS", "It is a long established fact that a reader will be distracted.", "24 sep 2020"),
        createData(blog2, "YAMAS AND NIYAMAS", "It is a long established fact that a reader will be distracted.", "24 sep 2020"),
        createData(blog3, "YAMAS AND NIYAMAS", "It is a long established fact that a reader will be distracted.", "24 sep 2020"),
        createData(blog4, "YAMAS AND NIYAMAS", "It is a long established fact that a reader will be distracted.", "24 sep 2020"),
        createData(blog5, "YAMAS AND NIYAMAS", "It is a long established fact that a reader will be distracted.", "24 sep 2020"),
        createData(blog6, "YAMAS AND NIYAMAS", "It is a long established fact that a reader will be distracted.", "24 sep 2020"),
    ];

    return (
        <section className='Blog'>
            <div className="title">
                <h3 style={titleStyle}>Artices / Blog</h3>
            </div>
            <Container>
                <Row>
                    {cards.map((card, index) => {
                        return (
                            <Col key={index} lg={4} md={6}>
                                <BlogCard
                                    img={card.img}
                                    title={card.title}
                                    text={card.text}
                                    date={card.date}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Blog