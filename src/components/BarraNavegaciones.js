import React from 'react';
import './componentes.css'; // Importar los estilos

const BarraNavegacion = ({ seccion }) => (
  <div className="barra-navegacion">
    ConnectHub - {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
  </div>
);

export default BarraNavegacion;
