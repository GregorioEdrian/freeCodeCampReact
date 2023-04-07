
import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png'
import ListadeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicación-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src= {freeCodeCampLogo} className='freecodecamp-logo' 
        alt = 'Logo de freeCodeCamp'/>        
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListadeTareas/>
      </div>

    </div>
  );
}

export default App;
