import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutStep from '../CheckoutStep/CheckoutStep';
import './Checkout.css';
import { CartContext } from '../CartPage/CartContext';
import 'font-awesome/css/font-awesome.min.css';
import 'react-datepicker/dist/react-datepicker.css';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [cardDetailsSaved, setCardDetailsSaved] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardType, setCardType] = useState(null);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (cartContext.cartItems.length === 0 && currentStep === 0) {
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleViewProducts = () => {
    navigate('/originalMerch');
  };

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleCloseModal = () => {
    setSelectedPayment(null);
  };

  const handleSaveCardDetails = () => {
    setCardDetailsSaved(true);
    setSelectedPayment(null);
  };

  const detectCardType = (number) => {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;
    if (visaPattern.test(number)) {
      setCardType('VISA');
    } else if (mastercardPattern.test(number)) {
      setCardType('MASTERCARD');
    } else {
      setCardType(null);
    }
  };

  const hasProductsInCart = cartContext.cartItems.length > 0;

  return (
    <div className="checkout">
      <CheckoutStep
        title="TU ELECCION DE COMPRA"
        currentStep={currentStep}
        stepNumber={0}
        onNext={handleNextStep}
        onPrev={handlePrevStep}
      >
        <div className={`confirmation-list ${currentStep === 0 ? 'visible' : 'hidden'}`}>
          <h2>Productos en el carrito:</h2>
          {cartContext.cartItems.length > 0 ? (
            <ul>
              {cartContext.cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-cart-container">
              <p>No hay productos en el carrito.</p>
              <img
                src={require('./carritovacio.png')}
                alt="Carrito vacío"
                className="empty-cart-image"
              />
            </div>
          )}
        </div>
      </CheckoutStep>

      {currentStep === 1 && hasProductsInCart && (
       <CheckoutStep
       title="METODOS DE PAGO"
       currentStep={currentStep}
       stepNumber={1}
       onNext={handleNextStep}
       onPrev={handlePrevStep}
     >
       <div className="payment-methods">
       <label className="payment-option bank-transfer">
           <input
             type="radio"
             name="paymentMethod"
             value="bankTransfer"
             onChange={() => handlePaymentSelection('bankTransfer')}
           />
           <i className="fa fa-university" aria-hidden="true"></i>
           Transferencia Bancaria
         </label>
         <label className="payment-option credit-card">
           <input
             type="radio"
             name="paymentMethod"
             value="creditCard"
             onChange={() => handlePaymentSelection('creditCard')}
           />
           <i className="fa fa-credit-card" aria-hidden="true"></i>
           Tarjeta de Crédito / Débito
         </label>
       </div>
       <div className="payment-icons">
        <i className="fa fa-cc-visa" aria-hidden="true"></i>
        <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
        <i className="fa fa-money" aria-hidden="true"></i>
        <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
      </div>
       {cardDetailsSaved && (
         <div className={`saved-card-details ${cardType}`}>
           <div className="card-header">
             <i className={`card-icon fa fa-cc-${cardType ? cardType.toLowerCase() : 'credit-card'}`} aria-hidden="true"></i>
             <span className="card-type">{cardType || 'TARJETA DE DEBITO/CREDITO'}</span>
           </div>
           <div className="card-number">{cardNumber.slice(0, 4)}•••• •••• •••{cardNumber.slice(-1)}</div>
           <div className="card-info">
             <div className="card-holder">{cardHolder}</div>
             <div className="card-expiry">{cardExpiry}</div>
           </div>
         </div>
       )}
     </CheckoutStep>
      )}

      {currentStep === 2 && hasProductsInCart && (
        <CheckoutStep
        title="CONFIRMACION DE COMPRA"
        currentStep={currentStep}
        stepNumber={2}
        onNext={handleNextStep}
        onPrev={handlePrevStep}
      >
        <div className="confirmation">
          <div className="confirmation-tick">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <h2>¡Compra confirmada!</h2>
          <p>Tu pedido está en camino y debería llegar en 3-5 días hábiles.</p>
        </div>
      </CheckoutStep>
      )}

      {selectedPayment && (
        <div className="payment-modal">
          <button className="close-modal" onClick={handleCloseModal}>
            &times;
          </button>
          {selectedPayment === 'bankTransfer' ? (
            <div className="bank-transfer-details">
              <h3>Transferencia Bancaria</h3>
              <div className="bank-detail">
                <i className="fa fa-user bank-icon" aria-hidden="true"></i>
                <span className="bank-label">Nombre de la Cuenta:</span>
                <span className="bank-value">FG WEB DESIGNS</span>
              </div>
              <div className="bank-detail">
                <i className="fa fa-credit-card bank-icon" aria-hidden="true"></i>
                <span className="bank-label">Número de la Cuenta:</span>
                <span className="bank-value">1234 5678 9012 3456</span>
              </div>
              <div className="bank-detail">
                <i className="fa fa-university bank-icon" aria-hidden="true"></i>
                <span className="bank-label">Banco:</span>
                <span className="bank-value">FG WEB BANK</span>
              </div>
              <div className="bank-detail">
                <i className="fa fa-book bank-icon" aria-hidden="true"></i>
                <span className="bank-label">Tipo de Cuenta:</span>
                <span className="bank-value">Ahorro / Corriente</span>
              </div>
              <div className="bank-detail">
                <i className="fa fa-code bank-icon" aria-hidden="true"></i>
                <span className="bank-label">SWIFT/BIC:</span>
                <span className="bank-value">CODIGOFGWEB</span>
              </div>
              <p className="bank-additional-info">
                Por favor, asegúrate de incluir la referencia del pedido en la transferencia.
              </p>
            </div>
          ) : (
            <div className="credit-card-details">
              <div className={`credit-card-simulator ${cardType ? cardType.charAt(0) + cardType.slice(1).toLowerCase() : ''}`}>
                <div className="card-header">
                  <i className={`card-icon fa fa-cc-${cardType ? cardType.toLowerCase() : 'credit-card'}`} aria-hidden="true"></i>
                  <span className="card-type">{cardType || 'TARJETA DE DEBITO/CREDITO'}</span>
                </div>
                <div className="card-number">{cardNumber.replace(/(\d{4})/g, '$1 ').trim() || '•••• •••• •••• ••••'}</div>
                <div className="card-info">
                  <div className="card-holder">{cardHolder || 'NOMBRE APELLIDO'}</div>
                  <div className="card-expiry">{cardExpiry || 'MM/AA'}</div>
                </div>
              </div>
              <div className="credit-card-form">
                <input type="number" placeholder="Número de Tarjeta" maxLength="16" onChange={(e) => { setCardNumber(e.target.value); detectCardType(e.target.value); }} />
                <input type="text" placeholder="Nombre en la Tarjeta" onChange={(e) => setCardHolder(e.target.value)} />
                <input type="month" placeholder="Fecha de Expiración" onChange={(e) => setCardExpiry(e.target.value)} />
                <input type="number" placeholder="CVC" maxLength="3" onChange={(e) => setCardCVC(e.target.value)} />
                <button className="save-card-button" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '5px' }} onClick={handleSaveCardDetails}>GUARDAR DATOS</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
