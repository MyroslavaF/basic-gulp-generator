# Constructor web simple with Gulp 4

Configure rápidamente la compilación de su proyecto en Gulp y escriba código en:

HTML, PUG, CSS, SCSS, SASS, LESS, JavaScript, TypeScript

---

### Funcionalidad de montaje

- compilación del preprocesador PUG
- minificación HTML
- compilación de preprocesadores LESS, SASS, STYLUS
- minificación CSS
- agregar prefijos CSS automáticamente
- traducción del lenguaje Type Script
- convierte el código ECMAScript 2015 + a una versión compatible con versiones anteriores de JavaScript con Babel
- minificación de JavaScript
- combinar varios archivos JavaScript en uno
- compresión de imágenes
- seguimiento de nuevas imágenes que aún no se han comprimido
- seguimiento de los cambios en los archivos y reinicio automático
- generación de sourcemaps
- visualización de tamaños de archivo en el terminal
- servidor local con actualización automática de la página cuando se cambian los archivos
---

#### Input

Estructura del catálogo para los estilos, scripts y imagenes:

src/src/styles/  
src/scripts/
src/img/

Extensión

.html, .pug .css, .sass, .scss, .less, .js, .ts, .jpg, .png, .gif

#### Output

Ruta dist  

dist/css/style.min.css  
dist/js/main.min.js 
dist/img/

---

#### Para empezar:

1. Descargar todos los archivos del proyecto.
2. En la terminal, vaya al directorio del proyecto.
3. Ejecutar el comando: <code>npm i </code> (debe estar instalado node.js).
4. Crear directorios y archivos en directorio scr.
5. Ejecutar comando: <code>gulp</code>.
6. Escribir su código y disfrutar de la construcción automática del proyecto.

---

#### Paquetes NPM usados:

[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) minificación de archivos HTML  
[gulp-pug](https://www.npmjs.com/package/gulp-pug) pug preprocesador de código HTML  
[gulp-less](https://www.npmjs.com/package/gulp-less) compilación de archivos Less  
[gulp-sass](https://www.npmjs.com/package/gulp-sass) compilación de archivos Sass y Scss  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) compresión y optimización de código Java Script  
[gulp-typescript](https://www.npmjs.com/package/gulp-typescript) convierte Type Script en Java Script  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) convierte JavaScript en un estándar antiguo  
[@babel/core](https://www.npmjs.com/package/@babel/core) núcleo Babel  
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) preset para compilación Babel  
[gulp-clean](https://www.npmjs.com/package/gulp-clean) minificación y optimización de archivos CSS  
[del](https://www.npmjs.com/package/del) eliminar directorios y archivos  
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) mapa de líneas de código para herramientas de desarrollo  
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) agregar prefijos automáticamente a CSS  
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) compresión de imágenes  
[gulp-concat](https://www.npmjs.com/package/gulp-concat) combinar varios archivos en uno  
[gulp-newer](https://www.npmjs.com/package/gulp-newer) solo genera archivos nuevos  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) cambia el nombre de los archivos  
[gulp-size](https://www.npmjs.com/package/gulp-size) muestra información sobre el tamaño de los archivos en el terminal  
[browser-sync](https://www.npmjs.com/package/browser-sync) actualiza automáticamente el sitio cuando se cambian los archivos  
