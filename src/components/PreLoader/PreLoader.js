import React from 'react';
import logo from './pre-loader.png'; 
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="logo" className="preloader-logo" />
      <div className="preloader-spinner"></div>
      <p className="preloader-text">LOADING...</p>
    </div>
  );
};

export default Preloader;
