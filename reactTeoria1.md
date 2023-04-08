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


### Algunos etodos de almacenamientos en React.

  - State: El estado es una forma simple de almacenar datos en un componente React. Puedes usar el estado para almacenar información que puede cambiar a lo largo del tiempo, como los datos de entrada de un usuario. El estado es administrado por el componente y se puede actualizar mediante el método setState.

  - Props: Los props son otra forma de pasar datos entre componentes en React. Puedes pasar datos de un componente padre a un componente hijo a través de props. Los props son de solo lectura, lo que significa que no pueden ser modificados por el componente hijo.

  - Redux: Redux es una biblioteca de gestión de estado de terceros para aplicaciones de React. Puedes usar Redux para almacenar y administrar el estado de la aplicación de manera centralizada. Redux se basa en un flujo unidireccional de datos y se usa comúnmente en aplicaciones grandes y complejas.

  - Context API: La API de contexto de React permite compartir datos entre componentes sin necesidad de pasar props manualmente a través de cada nivel de la jerarquía de componentes. Puedes usar Context para crear un proveedor de contexto que almacene los datos y hacerlos disponibles para todos los componentes descendientes que los necesiten.

  - LocalStorage: LocalStorage es un objeto de almacenamiento en el navegador que permite almacenar datos en la computadora del usuario. Puedes usar LocalStorage para almacenar datos localmente en la aplicación de React. Esto puede ser útil para almacenar configuraciones de usuario o datos que deben persistir entre sesiones.

  - Cookies: Las cookies son otra forma de almacenar datos en el navegador del usuario. Puedes usar cookies para almacenar información sobre el usuario, como su nombre de usuario y contraseña. Las cookies se pueden configurar para que expiren después de un período de tiempo determinado.

#### Almacenamiento local

  - LocalStorage: Como mencioné anteriormente, LocalStorage es un objeto de almacenamiento en el navegador que te permite almacenar datos en la computadora del usuario. Los datos almacenados en LocalStorage persisten incluso después de cerrar el navegador o reiniciar la computadora. Puedes usar el objeto window.localStorage para leer y escribir datos en LocalStorage.

  - SessionStorage: SessionStorage es similar a LocalStorage, pero los datos almacenados en SessionStorage solo están disponibles durante la sesión actual del usuario. Los datos se eliminan cuando se cierra la pestaña del navegador o se cierra la sesión. Puedes usar el objeto window.sessionStorage para leer y escribir datos en SessionStorage.

  - Cookies: Las cookies son pequeños archivos de texto que se almacenan en el navegador del usuario. Puedes usar cookies para almacenar información sobre el usuario, como su nombre de usuario y contraseña. Las cookies se pueden configurar para que expiren después de un período de tiempo determinado. Puedes usar la biblioteca js-cookie para leer y escribir cookies en React.

  - IndexedDB: IndexedDB es una base de datos en el navegador que te permite almacenar grandes cantidades de datos. Puedes usar IndexedDB para almacenar datos de forma estructurada y acceder a ellos de manera eficiente. Puedes usar la API de IndexedDB para leer y escribir datos en la base de datos.



### Crear Api.exe con fastApi Python.

  - Instala FastAPI y sus dependencias ejecutando pip install fastapi uvicorn[standard].

  - Crea un archivo main.py con el siguiente código de ejemplo para una API sencilla:


  Ejecuta el servidor de desarrollo con uvicorn main:app --reload.

  - Verifica que la API está funcionando visitando http://localhost:8000 en tu navegador.

  - Ahora, para generar un instalador, puedes utilizar herramientas como PyInstaller o cx_Freeze. En este ejemplo, usaremos PyInstaller.

  - Instala PyInstaller ejecutando pip install pyinstaller.

  - Genera el instalador con el siguiente comando: PyInstaller main.py - name my_api --onefile.

  - Esto generará un archivo ejecutable en la carpeta dist con el nombre my_api. Ejecuta el archivo para iniciar la API.

  - Verifica que la API está funcionando visitando http://localhost:8000 en tu navegador.
 