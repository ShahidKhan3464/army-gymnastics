import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from "../../../assets/images/logo.png"
import user from "../../../assets/images/user.png"
import cart from "../../../assets/images/cart.png"
import './navbar.css'

const Navb = () => {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Articles" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#article/3.1">Article 1</NavDropdown.Item>
                            <NavDropdown.Item href="#article/3.2">Article 2</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Podcast</Nav.Link>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#course/3.1">Course 1</NavDropdown.Item>
                            <NavDropdown.Item href="#course/3.2">Course 2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#shop/3.1">Shop 1</NavDropdown.Item>
                            <NavDropdown.Item href="#shop/3.2">Shop 2</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#home">Contact us</Nav.Link>

                        <NavDropdown
                            title={
                                <img src={user} alt="user" />
                            }
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#shop/3.1">user 1</NavDropdown.Item>
                            <NavDropdown.Item href="#shop/3.2">user 2</NavDropdown.Item>
                        </NavDropdown>
                        <div className="cart">
                            <img src={cart} alt="cart" />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navb