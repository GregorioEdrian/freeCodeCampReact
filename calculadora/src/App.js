import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import LogoFreeCodeCamp from './componentes/LogoFreeCodeCamp';
import { useState } from 'react';
import { evaluate } from 'mathjs'
 
function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input){
      try {
        var valor = evaluate(input)
        if ((valor == 'Infinity') ||  isNaN(valor)){
          setInput(input)
          alert('Math error')
        }else{
          setInput(valor)
        } 
        
      } catch (error) {
        var mensaje = "Error de sintaxis o math error, Verifique la entrada"
        alert(mensaje)
      }     
      
      
    }else {
      alert("Por favor ingrece valores para realizar los calculos.")
    }
    
  };

 

  return (
    <div className="App">
      <LogoFreeCodeCamp ruta ='imagenes/FreeCodeCamp_logo.png'
      altImage='Logo de freeCodeCamp'/>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className = 'fila'>
          <Boton  manejarClic ={agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className = 'fila'>
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
