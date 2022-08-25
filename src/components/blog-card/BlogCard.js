import React from 'react'
import { Card } from "react-bootstrap"
import './blogCard.css'

const BlogCard = ({ img, title, text, date }) => {

    return (
        <Card>
            <Card.Img src={img} />
            <Card.Body>
                <p>fitness</p>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ color: '#777777' }}>{text}</Card.Text>
            </Card.Body>
            <Card.Footer>{date}</Card.Footer>
        </Card>
    )
}

export default BlogCard