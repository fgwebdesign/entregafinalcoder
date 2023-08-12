import React, { useState } from 'react';

export const CartContext = React.createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(id, name, image, price) {
    const numericalPrice = parseFloat(price.replace('$', ''));
    console.log("Agregando al carrito:", { id, name, image, price: numericalPrice });

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);

      if (existingItem) {
        // El producto ya está en el carrito, incrementa la cantidad
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // El producto no está en el carrito, agrega un nuevo item
        return [...prevItems, { id, name, image, price: numericalPrice, quantity: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  }

  function getCartTotal() {
    const total = cartItems.reduce((acc, item) => {
      if (typeof item.price === 'number' && typeof item.quantity === 'number') {
        return acc + (item.price * item.quantity);
      }
      return acc;
    }, 0);
    console.log("Cart Items:", cartItems);
    console.log("Total:", total);
    return total;
  }

  function checkout() {
    setCartItems([]);
    alert('Gracias por tu compra!');
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartTotal, checkout }}>
      {props.children}
    </CartContext.Provider>
  );
}
