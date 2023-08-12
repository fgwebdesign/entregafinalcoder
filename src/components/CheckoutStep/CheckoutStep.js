import React from 'react';
import './CheckoutStep.css';

const CheckoutStep = ({ title, currentStep, stepNumber, onNext, onPrev, children }) => {
  return (
    <div className={`checkout-step ${currentStep === stepNumber ? 'active' : ''}`}>
      <div className="step-indicator">
        <div className={`step-circle ${currentStep >= stepNumber ? 'completed' : ''}`}>
          {currentStep >= stepNumber ? <span>{stepNumber + 1}</span> : null}
        </div>
        <div className="step-line"></div>
      </div>
      <h2>{title}</h2>
      {children}
      <div className="step-buttons">
        {stepNumber === 2 ? (
          <button onClick={() => window.location.href = '/'}>Volver al inicio</button>
        ) : (
          <>
            {stepNumber > 0 && <button onClick={onPrev}>Anterior</button>}
            {stepNumber < 2 && <button onClick={onNext}>Siguiente</button>}
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutStep;
