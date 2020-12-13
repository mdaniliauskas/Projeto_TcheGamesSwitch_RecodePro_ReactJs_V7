import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
        <Navbar.Brand>
            Tchê Games
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="item-menu" />
        <Navbar.Collapse id="item-menu">
            <Nav activeKey={location.pathname}>
                <Nav.Link as={Link} href="/" to="/">Página Inicial</Nav.Link>
                <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                <Nav.Link as={Link} href="/controle" to="/controle">Controle</Nav.Link>
                <Nav.Link as={Link} href="/lojas" to="/lojas">Nossas lojas</Nav.Link>
                <Nav.Link as={Link} href="/contatos" to="/contatos">Contatos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu; 