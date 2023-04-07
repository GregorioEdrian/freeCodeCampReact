
import '../hojas-de-estilos/Boton.css'


const esOperador = valor => {
  return isNaN(valor) && (valor !=='.') && (valor !== '=');
};


function Boton(props) {
  return(
    <div className= {`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()} 
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
};

export default Boton;