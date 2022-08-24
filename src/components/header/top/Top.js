import React from 'react'
import { Container } from 'react-bootstrap'
import location from "../../../assets/images/location.png"
import mobile from "../../../assets/images/mobile.png"
import clock from "../../../assets/images/clock.png"
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import twitter from "../../../assets/images/twitter.png"
import './top.css'

const Top = () => {

    return (
        <div className="Top">
            <Container>
                <div className="data">
                    <div className="contact">
                        <div className="location">
                            <img src={location} alt="location" />
                            <p>3261 Anmoore Road, NY 11230</p>
                        </div>
                        <div className="mobile">
                            <img src={mobile} alt="mobile" />
                            <p>Call Us:+01 123 456 78</p>
                        </div>
                        <div className="clock">
                            <img src={clock} alt="clock" />
                            <p>9:00 AM – 8:00 PM</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="#home"><img src={facebook} alt="facebook" style={{ width: '5px' }} /></a>
                        <a href="#home"><img src={instagram} alt="instagram" style={{ width: '14px' }} /></a>
                        <a href="#home"><img src={twitter} alt="twitter" style={{ width: '14px' }} /></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Top