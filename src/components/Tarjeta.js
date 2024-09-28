import React from 'react';
import './componentes.css';

const Tarjeta = ({ titulo, imagen, children, alHacerClick }) => (
  <div className="tarjeta">
    <h2>{titulo}</h2>
    {imagen && <img className="imagen" src={imagen} alt={titulo} onClick={alHacerClick} />}
    <div>{children}</div>
  </div>
);

export default Tarjeta;
