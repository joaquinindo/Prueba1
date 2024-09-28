import React from 'react';
import MigasPan from '../componentes/MigasPan';
import Boton from '../componentes/Boton';

const Configuracion = () => (
  <div>
    <MigasPan ruta={['Inicio', 'Configuración']} />
    <div className="tarjeta">
      <h2>Configuración de Cuenta</h2>
      <p>En esta página puedes actualizar la configuración de tu cuenta y tus preferencias.</p>
      <div className="configuracion-opciones">
        <div className="opcion">
          <h3>Cambiar Contraseña</h3>
          <Boton etiqueta="Cambiar" alHacerClick={() => alert('Contraseña cambiada')} />
        </div>
        <div className="opcion">
          <h3>Actualizar Email</h3>
          <Boton etiqueta="Actualizar" alHacerClick={() => alert('Email actualizado')} />
        </div>
        <div className="opcion">
          <h3>Preferencias de Notificación</h3>
          <Boton etiqueta="Modificar" alHacerClick={() => alert('Preferencias actualizadas')} />
        </div>
      </div>
    </div>
  </div>
);

export default Configuracion;
