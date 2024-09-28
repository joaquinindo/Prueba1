import React from 'react';
import MigasPan from '../componentes/MigasPan';
import Boton from '../componentes/Boton';

const Contacto = () => (
  <div>
    <MigasPan ruta={['Inicio', 'Contacto']} />
    <div className="tarjeta">
      <h2>Contacto</h2>
      <p>Puedes ponerte en contacto con nosotros utilizando el formulario a continuación.</p>
      <div className="formulario-contacto">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea rows="4" placeholder="Mensaje" required></textarea>
        <Boton etiqueta="Enviar Mensaje" alHacerClick={() => alert('Mensaje enviado')} />
      </div>
    </div>
  </div>
);

export default Contacto;
