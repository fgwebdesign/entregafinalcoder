import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Importar el componente Link
import { FaPhoneAlt } from 'react-icons/fa'; 
import { FaMailBulk } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../images/logofooter.png" alt="Logo" />
        </div>
        <div className="footer-columns">
          <div className="column">
            <h4>VISITA:</h4>
            <Link to="/">HOME PAGE</Link>
            <Link to="/aboutDuketo">ABOUT DUKETO</Link>
            <Link to="/originalMerch">ORIGINAL MERCH</Link>
            <Link to="/albums">ALBUMS</Link>
          </div>
          <div className="column">
            <h4>CONTACTANOS</h4>
            <p><FaPhoneAlt /> +1 (123) 456-7890</p>
            <p><FaMailBulk /> contacto@duki.ar</p>
          </div>
          <div className="column">
            <h4>PROXIMAS FECHAS</h4>
            <p>ESTADIO SANTIAGO BERNABEÚ - 08/06/2024</p>
            <p>ESTADIO RIVER PLATE - 03/12/2023</p>
            <p>ESTADIO RIVER PLATE - 02/12/2023</p>
            <p>CONCERT MUSIC FESTIVAL - 19/08/2023</p>

          </div>
     
        </div>
      </div>
      <div className="footer-copyright">
        © 2023 FG WEB DESIGNS
      </div>
    </footer>
  );
}

export default Footer;
