import React from 'react'
import './cardData.css'

const CardData = ({ img, title, text }) => {

    return (
        <div className='CardData'>
            <div className="img">
                <img src={img} alt="img" />
            </div>
            <div className="cardData-body">
                <div className="title">
                    <h6>{title}</h6>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
                <a href="#home">Read More</a>
            </div>
        </div>
    )
}

export default CardData