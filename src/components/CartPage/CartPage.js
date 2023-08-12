// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'; 
import './CartPage.css';


function CartPage() {
  const { cartItems, removeFromCart, getCartTotal, checkout } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>CARRITO DE COMPRAS</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>CANTIDAD: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>ELIMINAR</button>
            </div>
          </div>
        ))
      ) : (
        <p>NO EXISTEN PRODUCTOS AGREGADOS AL CARRITO.</p>
      )}
      {cartItems.length > 0 && (
        <>
          <div className="cart-total">
            <h3>TOTAL: ${getCartTotal().toFixed(2)}</h3>
          </div>
          <Link to="/checkout">
            <button className="checkout-button">FINALIZAR COMPRA</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPage;
