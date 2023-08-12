import React from 'react';
import './AboutDuketo.css';

function AboutDuketo() {
  const imageUrl = `${process.env.PUBLIC_URL}/images/AboutDuketo.png`;

  return (
    <div className="AboutDuketoContainer">
      <div className="AboutDuketoImage">
        <img src={imageUrl} alt="Duketo" />
      </div>
      <div className="AboutDuketoContent">
        <h2>ABOUT DUKETO</h2>
        <p>
          DUKI, cuyo nombre real es Mauro Ezequiel Lombardo, es un talentoso cantante, rapero y compositor argentino. Nacido el 16 de octubre de 1996 en Buenos Aires, Argentina, se ha convertido en una figura prominente en la escena musical urbana del país.
        </p>
        <p>
          Con su estilo único y su capacidad para fusionar géneros como el trap, el reguetón y el hip-hop, ha logrado cautivar a una audiencia diversa y ganarse el reconocimiento tanto a nivel nacional como internacional.
        </p>
        <p>
          Su carrera despegó en 2018 con el lanzamiento de su primer sencillo "She Don't Give a FO" en colaboración con Khea. Desde entonces, ha lanzado varios éxitos que han alcanzado millones de reproducciones en plataformas de streaming como Spotify y YouTube.
        </p>
        <p>
          DUKI se destaca por sus letras introspectivas y pegajosas, abordando temas como el amor, la fiesta y la vida en la ciudad. Su música refleja su personalidad auténtica y su pasión por la expresión artística.
        </p>
        <p>
          Además de su carrera musical, también se ha destacado en el ámbito de la moda y la cultura urbana, colaborando con reconocidas marcas y participando en eventos de la industria.
        </p>
        <p>
          Con su talento innato y su carisma en el escenario, continúa conquistando corazones y dejando huella en la industria musical. Su música sigue resonando en los oídos de sus seguidores, y su impacto en la escena urbana se hace cada vez más evidente.
        </p>
      </div>
    </div>
  );
}

export default AboutDuketo;
