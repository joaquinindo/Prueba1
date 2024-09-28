import React from 'react';
import './componentes.css';

const MigasPan = ({ ruta }) => (
  <div className="migas-pan">
    {ruta.map((p, index) => (
      <React.Fragment key={index}>
        {index > 0 && <span>/</span>}
        <a href="#">{p}</a>
      </React.Fragment>
    ))}
  </div>
);

export default MigasPan;
