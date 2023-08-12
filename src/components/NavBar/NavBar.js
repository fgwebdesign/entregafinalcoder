// NavBar.js
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { CartContext } from '../CartPage/CartContext';
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const CartSummary = () => (
    <div className="cart-summary">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button className="cart-remove-button" onClick={() => removeFromCart(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <div className="cart-summary-actions">
            <Link to="/cart" className="btn btn-primary">Ver carrito</Link>
          </div>
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="my-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">DUKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">HOME PAGE</Nav.Link>
            <Nav.Link as={Link} to="/aboutDuketo">ABOUT DUKETO</Nav.Link>
            <Nav.Link as={Link} to="/originalMerch">ORIGINAL MERCH</Nav.Link>
            <NavDropdown title="ALBUMS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/albums" className="ver-todos">MOSTRAR TODOS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/album1">SSJ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album2">24</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album3">DESDE EL FIN DEL MUNDO</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album4">DESDE EL FIN DEL MUNDO | LIVE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album5">TEMP DE REGGEATON I</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album6">TEMP DE REGGEATON II</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/album7">ANTES DE AMERI</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="light">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-items">{cartItems.length}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="cart-summary-dropdown">
              <CartSummary />
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
