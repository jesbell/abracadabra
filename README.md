# Desafío Abracadabra

En este desafío validaremos nuestros conocimientos de Node y Express, además de creación de rutas, Objetos Request y Response, Middlewares y Devolución de sitios web estáticos. 

Este desafío es parte del curso de Desafio Latam, Desarrollo de aplicaciones Full Stack Js.

# Descripción del desafío

El desafío propone el desarrollo de un sitio web estático, para la creación de un juego de azar, con temática de magia. En este sitio web, se presentan cuatro sombreros y el usuario debe buscar el conejo oculto, además solo usuarios registrados pueden acceder a este juego.

# Visuales

## Como usar el proyecto

Para utilizar debes estar atento a las distintas rutas que posee. Recordando que el proyecto utiliza el puerto, pero puede ser cambiado según la necesidad.

- 1ra ruta es para ver los usuarios (solo nombres)
``` 
localhost:3000/usuarios
 ```
- 2da ruta: es para acceder al juego, donde ':usuario', es el nombre del usuario que se encuentra en el json, mostrado en la primera ruta 
```
localhost:3000/abracadabra/juego/:usuario
```
Si el parametro (:usuario) esta incluido, nos mostrara el juego, de no ser así no lo hará.

| Sí usuario Desconocido | Usuario si existe |
| --- | --- |
| ![suario_desconocido](/assets/usuario_desconocido.png)| ![usuario_correcto](/assets/usuario_correcto.png) |

- La 3ra ruta, es para ser usada dentro del /abracadabra/juego/:usuario, dado que nos devuelve una página html. Si el usuario es correcto, podemos comenzar a usar el juego. Allí debemos hacer click en los sombreros para encontrar el conejo. Si no encontramos el conejito nos mostrara una imagen distinta.
  
| Sombrero incorrecto | Sombrero correcto |
| --- | --- |
| ![sombrero incorrecto](/assets/voldemort.jpg)| ![sombrero correcto](/assets/conejito.jpg) |

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo: puedes usar Ubuntu o Windows 10 o superior.
- Se trabajo con Javascript, html.
- Node versión v20.11.1
- Express

### Instalación 🔧

Para utilizar este proyecto debes clonar este repositorio en tu máquina, utilizando git.

```
git clone git@github.com:jesbell/abracadabra.git
```

Una vez allí puedes abrir el proyecto donde te sea más comodo. Pero dentro de la carpeta del proyecto deberas realizar las instalación de los node_modules, con el siguiente comando.
```
npm install
```

Cuando se haya instalado todo, puedes realizar la ejecución del proyecto, llamando al archivo js para levantar el servidor.
```
node serverExpress.js
```

### Próximos pasos.

Lo siquiente que queda a realizar, es entrar a la ruta con el usuario correcto, para probar el juego al azar construido. Si no has cambiado el puerto, deberas colocar el siguiente comando en tu navegador de preferencia:
```
localhost:3000/abracadabra/juego/:usuario
```
Y reemplazar ':usuario' por un nombre que ya existe en el arreglo que se encuentra en el servidor. 

## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/jesbell/abracadabra/issues).

## Versionado 📌

Usamos [Git](https://git-scm.com) para el versionado.

## Expresiones de Gratitud 🎁

Si encontraste cualquier valor en este proyecto o quieres contribuir, aquí está lo que puedes hacer:

- Comparte este proyecto con otros
- Invítanos un café ☕
- Inicia un nuevo problema o contribuye con un PR
- Muestra tu agradecimiento diciendo gracias en un nuevo problema.

---

⌨️ con ❤️ por [Joselyn Gonzalez](https://github.com/jesbell) 😊
