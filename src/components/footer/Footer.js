import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footerLogo from "../../assets/images/footer-logo.png"
import facebook from "../../assets/images/fb.png"
import instagram from "../../assets/images/insta.png"
import twitter from "../../assets/images/twitt.png"
import location from "../../assets/images/location-icon.png"
import email from "../../assets/images/email.png"
import phone from "../../assets/images/phone.png"
import like from "../../assets/images/like.png"
import './footer.css'

const Footer = () => {

    return (
        <footer className='Footer'>
            <Container>
                <div className="upper-footer">
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Col lg={3} style={{ width: '100%', maxWidth: '320px' }}>
                            <div className="logo">
                                <img src={footerLogo} alt="logo" />
                            </div>
                            <p className="description">
                                Where we make getting into shape an exciting
                                adventure with real results.
                                Get Fit. Get Healthy.
                            </p>
                            <div className="social-icons">
                                <a href="#home"><img src={facebook} alt="facebook" /></a>
                                <a href="#home"><img src={instagram} alt="instagram" /></a>
                                <a href="#home"><img src={twitter} alt="twitter" /></a>
                            </div>
                        </Col>

                        <Col lg={3} style={{ width: '100%', maxWidth: '300px' }}>
                            <h6>Contact</h6>
                            <div className="contact">
                                <div className="img">
                                    <img src={location} alt="location" />
                                </div>
                                <p>1770 W 950 S Springville Utah, USA</p>
                            </div>

                            <div className="contact">
                                <div className="img">
                                    <img src={email} alt="email" />
                                </div>
                                <p>hello@armygymnastics.com</p>
                            </div>

                            <div className="contact">
                                <div className="img">
                                    <img src={phone} alt="phone" />
                                </div>
                                <p>+1 (801) 389 7078</p>
                            </div>
                        </Col>

                        <Col lg={3} style={{ width: '180px' }}>
                            <h6>Quick links</h6>
                            <ul>
                                <li><a href="#home">Privacy Policy</a></li>
                                <li><a href="#home">Terms And Conditions</a></li>
                            </ul>
                        </Col>

                        <Col lg={3} style={{ widht: '100%', maxWidth: '250px' }}>
                            <h6>Newsletter</h6>
                            <p style={{ width: '210px' }}>Subscribe to get latest news.</p>
                            <div className="field">
                                <input type="text" placeholder="Enter Email Address" />
                                <button>
                                    <img src={like} alt="like" />
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="lower-footer">
                    <p>Copyright © 2021. All Rights Reserved. ARMY GYMNASTICS</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer