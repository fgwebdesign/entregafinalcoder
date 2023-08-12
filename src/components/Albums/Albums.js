import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import './Albums.css';

const albums = [
  {
    id: 1,
    title: 'SSJ',
    image: '/images/albums/ssj.png', 
  },
  {
    id: 2,
    title: '24',
    image: '/images/albums/24.png',
  },
  {
    id: 3,
    title: 'DESDE EL FIN DEL MUNDO',
    image: '/images/albums/desdeelfin.png',
  },
  {
    id: 4,
    title: 'DESDE EL FIN DEL MUNDO | LIVE',
    image: '/images/albums/desdeelfinlive.jpg',
  },
  {
    id: 5,
    title: 'TEMP DE REGGAETON I',
    image: '/images/albums/tempreg1.png',
  },
  {
    id: 6,
    title: 'TEMP DE REGGAETON II',
    image: '/images/albums/tempreg2.png',
  },
  {
    id: 7,
    title: 'ANTES DE AMERI',
    image: '/images/albums/ameri.png',
  },
];

function Albums() {
  return (
    <div className="albums-container">
      <h1 className="albums-title">ALBUMS DEL DUKETO</h1>
      <div className="albums-grid">
        <Row xs={1} md={3} className="g-4">
          {albums.map((album) => (
            <Col key={album.id}>
              <Link to={`/album/${album.id}`} className="album-card">
                <img src={process.env.PUBLIC_URL + album.image} alt={album.title} className="album-image" />
                <h2 className="album-title">{album.title}</h2>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Albums;
