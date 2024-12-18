import React, { useState } from 'react';
import './Survey.css'
import { ListaSurvey } from './ListaSurvey/ListaSurvey';

export const Survey = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const Lista = [
        {
          Nombre: 'Encuesta 1',
          Description: 'Descripción de la Card 1',
        },
        {
          Nombre: 'Encuesta 2',
          Description: 'Descripción de la Card 2',
        },
        {
          Nombre: 'Encuesta 3',
          Description: 'Descripción de la Card 3',
        },
      ];

      const toggleOpen = () => {
        setIsOpen((prev) => !prev); // Cambia el estado actual
      };

  return (
     <div className='container-main-sections'>
       <div>
         <h2>Nuestros Encuestas</h2>
       </div>
       <div className='Templates-content-btn'>
         <button onClick={toggleOpen}>
           {isOpen ? 'Cerrar Formulario' : 'Crear Nuevo +'}
         </button>
       </div>
       {isOpen && (
         <div className='subsection-content'>
           {/* todavia nada */}
         </div>
       )}
 
      { !isOpen &&<div className='subsection-content'>
         {/* Pasamos el array Lista como prop */}
         {Lista.map((template, index) => (
           <ListaSurvey
             key={index}
             Nombre={template.Nombre}
             Description={template.Description}
           />
         ))}
       </div>}
     </div>
   );
 };
 
