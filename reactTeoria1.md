### React.


  - React: es una biblioteca de javaScript de código abierto diseñada para crear interface de usuario.

  - Bibliotecas: Son un conjunto de implementaciones u herramientas para escribir nuestro código.

### Conceptos basicos.

  - Componente: Es una parte de la intefas de usuario que es independiente y reutilizable (Actuan como bloques o como lego).

    - se dividen en.

      - Funcionales. (Mas conciso y mas facil)
        Es una función de JavaScript/ES6 que retorna un elemento de React(jsx).

          <img src="images\exampleFuncionales1.jpg" width="70%">

          <img src="images/exampleFuncionales2.jpg" width="70%">


        - props: Son argumentos que pueden recibir los componentes de react. **Solo pueden ser enviados de padre a hijo**
          
          <img src="images/exampleFuncionales3.jpg" width="70%">


      - De Clase.

        <img src="images/class1.jpg" width="70%">

        Cuando usamos una clase debemos usar this.

        <img src="images/class2.jpg" width="70%">


  - Estado de un componente:


    <img src="images/estado.jpg" width="70%">


  - Hook:

    <img src="images/hook.jpg" width="70%">

  - Event Listener.

    
    <img src="images/eventListener.jpg" width="70%">

### JSX.

- Es una extención de React para la sintaxis de JavaScript.

  <img src="images/jsx1.jpg" width="70%">

  <img src="images/jsx2.jpg" width="70%">

### React DOM.

  Paquete que facilita la interacción y actualización del DOM en aplicaciones React. **DOM** significa **Document object Model**. es una representación en el navegador de todos los elementos que conforman una página o aplicación web.

### Esctructura de un componente.

   
  <img src="images/estructuras1.jpg" width="70%">

  - Una ves que se define la estructura del componente es importante saber como renderizarlo.

  <img src="images/estructuras2.jpg" width="70%">

### Crear un proyecti react.
   

   - Primero en la terninar usamos el comando.
      ~~~
        npx create-react-app mi-app
        npm start 
      ~~~

      ~~~
        npx create-react-app mi-app
        npm start 
      ~~~
  
  - Unas de las cosas claves a hacer es identificar los componentes que necesitaremos para nuestra app.

### Crear un componente.


  - Podemos usar iconos populares instalando React Icons.
  - El paquete uuid se utiza para crear un identificador unico.

  ~~~
  npm install react-icons --save
  npm install uuid
  ~~~

 