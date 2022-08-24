import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/cartWidget';

function NavTodoMaderas() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img class="navbar-img" src="/logo.png" alt="" />
                <Navbar.Brand href="#home">TodoMaderas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Hogar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Jardin
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Juguetes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Nosotros
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget img="/cartlogo.png" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavTodoMaderas;