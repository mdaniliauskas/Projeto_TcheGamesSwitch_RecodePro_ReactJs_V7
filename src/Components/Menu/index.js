import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Menu.css';

function BaseMenu() {
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
        <Navbar.Brand>
            Tchê Games
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="item-menu" />
        <Navbar.Collapse id="item-menu">
            <Nav>
                <Nav.Link href="/" to="/">Página Inicial</Nav.Link>
                <Nav.Link href="/produtos" to="/produtos">Produtos</Nav.Link>
                <Nav.Link href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                <Nav.Link href="/contatos" to="/contatos">Contatos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu; 