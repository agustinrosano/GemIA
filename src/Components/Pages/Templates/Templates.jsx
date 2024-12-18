import React, { useState } from 'react';
import './Templates.css';
import { ListaTemplates } from './ListaTemplates/ListaTemplates';
import { FlowBuilder } from './FlowBuilder/FlowBuilder';

export const Templates = () => {
  // useState para manejar el estado de isOpen
  const [isOpen, setIsOpen] = useState(false);

  const Lista = [
    {
      Nombre: 'Flow 1',
      Description: 'Descripción de la Card 1',
    },
    {
      Nombre: 'Flow 2',
      Description: 'Descripción de la Card 2',
    },
    {
      Nombre: 'Flow 3',
      Description: 'Descripción de la Card 3',
    },
  ];

  // Función para alternar el estado
  const toggleOpen = () => {
    setIsOpen((prev) => !prev); // Cambia el estado actual
  };

  return (
    <div className='container-main-sections'>
      <div>
        <h2>Nuestros Templates</h2>
      </div>
      <div className='Templates-content-btn'>
        <button onClick={toggleOpen}>
          {isOpen ? 'Cerrar Formulario' : 'Crear Nuevo +'}
        </button>
      </div>
      {isOpen && (
        <div className='subsection-content'>
          <FlowBuilder/>
        </div>
      )}

     { !isOpen &&<div className='subsection-content'>
        {/* Pasamos el array Lista como prop */}
        {Lista.map((template, index) => (
          <ListaTemplates
            key={index}
            Nombre={template.Nombre}
            Description={template.Description}
          />
        ))}
      </div>}
    </div>
  );
};
