import React from 'react';
import './componentes.css';

const Menu = ({ navegarA }) => (
  <div className="menu">
    <a href="#" onClick={() => navegarA('inicio')}>Inicio</a>
    <a href="#" onClick={() => navegarA('perfil')}>Perfil</a>
    <a href="#" onClick={() => navegarA('conexiones')}>Conexiones</a>
    <a href="#" onClick={() => navegarA('oportunidades')}>Oportunidades</a>
    <a href="#" onClick={() => navegarA('configuracion')}>Configuración</a> 
    <a href="#" onClick={() => navegarA('contacto')}>Contacto</a>
  </div>
);

export default Menu;
