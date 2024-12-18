import React from 'react'

export const ListaSurvey = ({ Nombre, Description }) => {
    return (
      <div className='lista-card'>
          <div>
              <div>
                <h3>{Nombre}</h3>
              </div>
              <div>
                <p>{Description}</p>
              </div>
          </div>
        <div>
          <button>
                editar
          </button>
        </div>
      </div>
    );
  };
  