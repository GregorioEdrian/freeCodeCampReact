# Como Crear un Api y obtener el ejecutable.

  - ¿Como crear el entorno virtual?

    ~~~
    python -m virtualenv venv
    ~~~
  

  - Activar el entorno virtual.

    ~~~
    ./venv/Scripts/activate
    ~~~
  

  - Lista de bibliotecas instaladas en el entorno virtual.

    ~~~
    pip list
    ~~~

 - instalaremos las siguientes bibiotecas.

    ~~~
    pip install flask flask-cors psycopg2 python-decouple python-dotenv
    ~~~

    - flask-cors: peticiones cruzadas.

    - psycopg2: conector a MySql.

    - python-decouple: Manejar variables de entorno.

    - python-dotenv: Entiende los archivos de variables de entorno.