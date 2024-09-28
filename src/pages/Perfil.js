import React from 'react';
import MigasPan from '../componentes/MigasPan';
import Boton from '../componentes/Boton';

const Perfil = () => (
  <div>
    <MigasPan ruta={['Inicio', 'Perfil']} />
    <div className="contenedor-perfil">
      <img className="imagen" src="https://via.placeholder.com/150" alt="Perfil" />
      <div className="detalles">
        <h2>John Doe</h2>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Teléfono:</strong> +123456789</p>
        <p><strong>Descripción:</strong> Soy un desarrollador web con más de 5 años de experiencia en el desarrollo de aplicaciones front-end y back-end. Mis principales habilidades incluyen React, Node.js y MongoDB.</p>
        <div className="chip">React</div>
        <div className="chip">Node.js</div>
        <div className="chip">MongoDB</div>
        <Boton etiqueta="Editar Perfil" alHacerClick={() => alert('Perfil actualizado')} />
      </div>
    </div>
  </div>
);

export default Perfil;
