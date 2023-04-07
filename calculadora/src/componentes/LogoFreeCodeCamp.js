import '../App.css'
import React from 'react';

function LogoFreeCodeCamp(props) { 
  return(
    <div className = 'freecodecamp-logo-contenedor' >
        <img className='freecodecamp-logo'
        src= {require(`../${props.ruta}`)}
        alt={props.altImage}/>
      </div>
  );
};

export default LogoFreeCodeCamp;

