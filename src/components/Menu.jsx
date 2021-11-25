import * as React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap'


const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Rodrigo Diaz (aka p1ch1)</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#">About me</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Kapture by slick</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Draw</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Three.js</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Code Player</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contact me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu


