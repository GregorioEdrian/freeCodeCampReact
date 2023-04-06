import './App.css';
import Testimonio from './components/Testimonio.js';
import {dataTestimonio} from './datos/datos-testimonios.js';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          nombre = {dataTestimonio.shawn.nombre}
          pais = {dataTestimonio.shawn.pais}
          imagen = 'shawn'
          cargo = {dataTestimonio.shawn.cargo}
          empresa = {dataTestimonio.shawn.empresa}
          testimonio = {dataTestimonio.shawn.testimonio}
        />        
        
        <Testimonio
          nombre= {dataTestimonio.sarah.nombre}
          pais = {dataTestimonio.sarah.pais}
          imagen = 'sarah'
          cargo = {dataTestimonio.sarah.cargo}
          empresa = {dataTestimonio.sarah.empresa}
          testimonio =  {dataTestimonio.sarah.testimonio}
        />

        <Testimonio
          nombre= {dataTestimonio.emma.nombre}
          pais = {dataTestimonio.emma.pais}
          imagen = 'emma'
          cargo = {dataTestimonio.emma.cargo}
          empresa = {dataTestimonio.emma.empresa}
          testimonio =  {dataTestimonio.emma.testimonio} 
          />
      </div>
    </div>
  );
}

export default App;
