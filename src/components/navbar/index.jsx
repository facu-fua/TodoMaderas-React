import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';

function NavTodoMaderas() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img className="navbar-img" src="/assets/images/logo.png" alt="" />
                <Navbar.Brand>
                    <Link to={"/"}>TodoMaderas</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <h6>Por Ubicacion</h6>
                            <NavDropdown.Item>
                            <Link to={"category/Capital Federal"}>Capital Federal</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                            <Link to={"category/Buenos Aires"}>Buenos Aires</Link>
                            </NavDropdown.Item>
                            <hr/>
                            <h6>Por Producto</h6>
                            <NavDropdown.Item href="#action/3.1">
                                <Link to={"/category/mesas y sillas de madera"}>Mesas y Sillas</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Link to={"/category/baño madera"}>Baño</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <Link to={"/category/juegos madera"}>Juegos y juguetes</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                <Link to={"/category/:id"}>Nosotros</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget img="/assets/images/cartlogo.png" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavTodoMaderas;