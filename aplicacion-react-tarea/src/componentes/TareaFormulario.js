import react, { useState } from 'react';
import '../hojas-de-estilos/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault(); /*para que no se cargue toda la app al enviar formulario*/
    const tareaNueva = {
      id: uuidv4(),
      texto : input,
      completada : false
    };
    
    props.onSubmit(tareaNueva);
  }

  return(
    <form className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type = 'text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='agregar-tarea'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;