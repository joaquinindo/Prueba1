import React from 'react';
import Tarjeta from '../componentes/Tarjeta';
import MigasPan from '../componentes/MigasPan';
import Boton from '../componentes/Boton';
import imagenBienvenida from '../assets/imagenes/bienvenida.png'; // Ruta a la imagen de bienvenida

const Inicio = ({ navegarA }) => (
  <div>
    <MigasPan ruta={['Inicio', 'Página Principal']} />
    <img className="imagen-bienvenida" src={imagenBienvenida} alt="Bienvenido a ConnectHub" />
    <Tarjeta titulo="John Doe" imagen="https://via.placeholder.com/100" alHacerClick={() => navegarA('perfil')}>
      <p>Desarrollador Web con experiencia en React y Node.js.</p>
      <div className="chip">React</div>
      <div className="chip">Node.js</div>
      <Boton etiqueta="Ver Perfil" alHacerClick={() => navegarA('perfil')} />
    </Tarjeta>
    <Tarjeta titulo="Jane Smith" imagen="https://via.placeholder.com/100" alHacerClick={() => navegarA('perfil')}>
      <p>Diseñadora Gráfica especializada en UI/UX.</p>
      <div className="chip">UI/UX</div>
      <div className="chip">Photoshop</div>
      <Boton etiqueta="Ver Perfil" alHacerClick={() => navegarA('perfil')} />
    </Tarjeta>
  </div>
);

export default Inicio;
