import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';
import {CartContext} from '../../context/cartContext';
import { useContext } from 'react';

function NavTodoMaderas() {
    const {carrito} = useContext(CartContext)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img className="navbar-img" src="/assets/images/logo.png" alt="" />
                <Link to={"/"}>
                    <Navbar.Brand >
                        TodoMaderas
                    </Navbar.Brand>
                </Link>
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
                            {/* <hr/>
                            <h6>Por Producto</h6>
                            <NavDropdown.Item href="#action/3.1">
                                <Link to={"/category/mesas y sillas de madera"}>Mesas y Sillas</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Link to={"/category/baño madera"}>Baño</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <Link to={"/category/juegos madera"}>Juegos y juguetes</Link>
                            </NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                <Link to={"/nosotros"}>Nosotros</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {carrito.length > 0 ? 
                    <>
                    <Link to="/cart">
                        <button>
                            <CartWidget img="/assets/images/cartlogo.png" />
                            <h6>{carrito.length}</h6>
                        </button>
                    </Link>
                    </>:
                    null
                    }
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavTodoMaderas;