// OriginalMerch.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './OriginalMerch.css';
import { products } from './Products'; 

function OriginalMerch() {
  return (
    <div className="original-merch">
      <h1>ORIGINAL MERCH</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3 className="product-text">{product.name}</h3> 
              <div className="product-card-divider"></div>
              <p className="price product-text">{product.price}</p> 
              <p className="description product-text">{product.description}</p>
              <button className="buy-button-custom">COMPRAR</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OriginalMerch;
