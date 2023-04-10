import react, { useState } from 'react'
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilos/ListaDeTareas.css';
import Tarea from './Tarea';

function ListadeTareas(){

  const obtenerTareasLocalStorage = () => {
    var tareasObtenidas = localStorage.getItem('tareas');
    tareasObtenidas = JSON.parse(tareasObtenidas);
    var tareasArray = [];
    for (let i = 0; i<tareasObtenidas.length; i++ ){
      tareasArray = [tareasObtenidas[i], ...tareasArray]
    }
    console.log(tareasArray)
    
    return tareasArray;
    
  }

  /*const [tareas, setTareas] = useState([]);*/

  const [tareas, setTareas] = useState(obtenerTareasLocalStorage());

  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      localStorage.setItem('tareas',JSON.stringify(tareasActualizadas))
    }else{
      alert('El campo esta vacio')
    }
    
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(
      tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
      localStorage.setItem('tareas',JSON.stringify(tareasActualizadas))
  }

  const completarTarea = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea
    });
    setTareas(tareaActualizada);
    localStorage.setItem('tareas',JSON.stringify(tareaActualizada))
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