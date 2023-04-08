import react, { useState } from 'react'
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilos/ListaDeTareas.css';
import Tarea from './Tarea';

function ListadeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }else{
      alert('El campo esta vacio')
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(
      tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea
    });
    setTareas(tareaActualizada);
  }

  return(
    <>
      <TareaFormulario onSubmit = {agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => 
            <Tarea
            key = {tarea.id}
            id = {tarea.id} 
            texto= {tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea = {completarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListadeTareas;