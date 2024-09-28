import React from 'react';
import MigasPan from '../componentes/MigasPan';
import Boton from '../componentes/Boton';

const Oportunidades = () => (
  <div>
    <MigasPan ruta={['Inicio', 'Oportunidades']} />
    <div className="oportunidades">
      <div className="oportunidad">
        <p className="titulo-oportunidad">Desarrollador React</p>
        <p className="empresa-oportunidad">Tech Solutions</p>
        <p className="descripcion-oportunidad">Buscamos un desarrollador con experiencia en React para trabajar en proyectos innovadores.</p>
        <Boton etiqueta="Aplicar" alHacerClick={() => alert('Has aplicado a Desarrollador React')} />
      </div>
      <div className="oportunidad">
        <p className="titulo-oportunidad">Diseñador Gráfico</p>
        <p className="empresa-oportunidad">Creative Studio</p>
        <p className="descripcion-oportunidad">Se necesita un diseñador gráfico con experiencia en UI/UX y Adobe Photoshop.</p>
        <Boton etiqueta="Aplicar" alHacerClick={() => alert('Has aplicado a Diseñador Gráfico')} />
      </div>
      <div className="oportunidad">
        <p className="titulo-oportunidad">Gerente de Proyecto</p>
        <p className="empresa-oportunidad">Global Corp</p>
        <p className="descripcion-oportunidad">Estamos buscando un gerente de proyecto para liderar equipos en el desarrollo de software.</p>
        <Boton etiqueta="Aplicar" alHacerClick={() => alert('Has aplicado a Gerente de Proyecto')} />
      </div>
    </div>
  </div>
);

export default Oportunidades;
