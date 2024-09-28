import React from 'react';
import MigasPan from '../componentes/MigasPan';
import Boton from '../componentes/Boton';

const Conexiones = ({ navegarA }) => (
  <div>
    <MigasPan ruta={['Inicio', 'Conexiones']} />
    <ul className="lista">
      <li className="item-lista">
        <span><i className="icono">👤</i> Alice Johnson</span>
        <Boton etiqueta="Ver Perfil" alHacerClick={() => navegarA('perfil')} />
      </li>
      <li className="item-lista">
        <span><i className="icono">👤</i> Bob Williams</span>
        <Boton etiqueta="Ver Perfil" alHacerClick={() => navegarA('perfil')} />
      </li>
      <li className="item-lista">
        <span><i className="icono">👤</i> Charlie Brown</span>
        <Boton etiqueta="Ver Perfil" alHacerClick={() => navegarA('perfil')} />
      </li>
      <li className="item-lista">
        <span><i className="icono">👤</i> Daniel White</span>
        <Boton etiqueta="Ver Perfil" alHacerClick={() => navegarA('perfil')} />
      </li>
    </ul>
  </div>
);

export default Conexiones;
