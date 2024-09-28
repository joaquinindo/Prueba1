import React from 'react';
import './componentes.css';

const Boton = ({ etiqueta, alHacerClick }) => (
  <button onClick={alHacerClick} className="btn">
    {etiqueta}
  </button>
);

export default Boton;
