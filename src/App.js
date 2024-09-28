import React, { useState } from 'react';
import BarraNavegacion from './componentes/BarraNavegacion';
import Menu from './componentes/Menu';
import Inicio from './paginas/Inicio';
import Perfil from './paginas/Perfil';
import Conexiones from './paginas/Conexiones';
import Oportunidades from './paginas/Oportunidades';
import Contacto from './paginas/Contacto';
import Configuracion from './paginas/Configuracion'; // Nueva página de configuración
import './estilos/principal.css'; // Estilos globales

const App = () => {
  const [seccion, setSeccion] = useState('inicio');

  const navegarA = (seccion) => {
    setSeccion(seccion);
  };

  return (
    <div>
      <BarraNavegacion seccion={seccion} />
      <Menu navegarA={navegarA} />
      <div className="contenedor">
        {seccion === 'inicio' && <Inicio navegarA={navegarA} />}
        {seccion === 'perfil' && <Perfil />}
        {seccion === 'conexiones' && <Conexiones navegarA={navegarA} />}
        {seccion === 'oportunidades' && <Oportunidades />}
        {seccion === 'contacto' && <Contacto />}
        {seccion === 'configuracion' && <Configuracion />} {/* Nueva página de configuración */}
      </div>
    </div>
  );
};

export default App;
