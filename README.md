# DAM
Trabajo Práctico Desarrollo de Aplicaciones Multiplataforma

Alumno: Leandro Bello

# EXPLICACIÓN DE LA APP

En este trabajo práctico, se creó con ionic angular una aplicación que permite interactuar con 6 dispositivos (sensores) de una casa inteligente. 

Las interacciones involucran poder ver la última medicición registrada de casa sensor al hacer clic en cada uno de ellos. Asimismo, se permite consultar todas las mediciones de dicho dispositivo. Por otra parte, se puede abrir y cerrar la electroválvula y ver los registros de cada apertura y cierre. En caso de que se acumulen varios registros, se le agregó una barra de scroll.

![Captura de app]("app-dam-standalone/captura1.png)

![Captura de logs de riego](app-dam-standalone/captura2.png)

# CÓMO CORRER LA APP

Para poder correr esta aplicación, se debe clonar el repositorio y hacer un `docker-compose up` dentro de la carpeta de standalone, que es la manera en que se programó la lógica.
