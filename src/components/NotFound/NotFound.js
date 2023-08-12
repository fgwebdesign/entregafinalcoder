import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <img src="/images/error404.png" alt="404 Not Found" className="not-found-image" />
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
}

export default NotFound;
