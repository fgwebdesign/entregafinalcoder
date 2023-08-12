import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Products'; 
import { CartContext } from '../CartPage/CartContext'; 
import './ProductDetail.css';

function ProductDetail() {
    let { productId } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [sizeError, setSizeError] = useState(false); // Nuevo estado para controlar el error

    const product = products.find((product) => product.id === parseInt(productId));

    const { addToCart } = useContext(CartContext); 

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        setSizeError(false); // Restablecer el error cuando se selecciona un tamaño
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, product.name, product.image, product.price);
        } else {
            setSizeError(true); // Establecer el error si no se seleccionó un tamaño
        }
    };

    return product ? (
        <div className="product-detail-container">
         <div className="product-detail-image-container">
            <img className="product-detail-image" src={product.image} alt={product.name} />
        </div>
            <div className="product-detail-info">
                <h1 className="product-detail-title">{product.name}</h1>
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-price">{product.price}</p>
                <div className="divider"></div>
                <div className="product-detail-size">
                    {sizeError && <div className="error-message">Necesitas seleccionar un talle para agregarlo al carrito</div>}
                    <h3>SELECCIONA TU TALLE:</h3>
                    <div className="sizes">
                        {['S', 'M', 'L', 'XL'].map(size => (
                            <button 
                                key={size}
                                className={`size-button ${selectedSize === size ? 'active' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="divider"></div>
                <button 
                    className="product-detail-buy-button" 
                    onClick={handleAddToCart}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    ) : (
        <div>Producto no encontrado</div>
    );
}

export default ProductDetail;
