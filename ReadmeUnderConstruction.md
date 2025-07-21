# React + TypeScript + Vite Under Construction
Docs oficiales en Vite https://vite.dev/guide/

Pasos previos
1.- Tener Node js instalado (puedes verificar en la consola si escribes `Node`)
2.- Tener Vs code instalado (opcional pero hace paro)
3.- Mis extensiones son:
 - ES7+ React/Redux/React-Native snippets
 - Material Icon Theme (para que te salgan con imagenes en el explorer)

Como correr en modo dev/hot reload para modificar y ver los cambios en el navegador
1.- Entra en el folder del proyecto, sabes si estas en el folder correcto si estas afuera de la carpeta que dice src
y ves los archivos de package.json y package-lock.json
2.- Abre la consola en vs code con Ctrl + shift + ñ y escribe `npm run dev`, si no puedes, en el explorer puedes escribir en la parte en donde se pone la ruta `cmd` y con eso te abre la consola donde estas y ya puedes escribir `npm run dev`
3.- Al escribir esto te va a dar un URL que dice algo asi como localhost:1212/, tu lo copias y lo pegas en tu navegador, si lo hiciste en vs code le puedes dar ctrl + click
4.- A partir de este punto, cualquier cambio que hagas (siempre y cuando no haya errores) se va a reflejar en el navegador cuando guardes (ctrl + s)

Build (carpeta dist que es la que subes)
1.- Entra en el folder del proyecto, sabes si estas en el folder correcto si estas afuera de la carpeta que dice src
y ves los archivos de package.json y package-lock.json
2.- Abre la consola en vs code con Ctrl + shift + ñ y escribe `npm run build`, si no puedes, en el explorer puedes escribir en la parte en donde se pone la ruta `cmd` y con eso te abre la consola donde estas y ya puedes escribir `npm run build`
3.- Te generara la carpeta dist, esa la puedes aventar en casi cualquier servicio de hosting sin pedos, te va a dar todo el js y css ya medio encriptado. tambien te dara todos los items de la carpeta public (fotos, videos, modelos3d, etc, eso va ahi)

Algunas observaciones:
- Los cambios los deberias hacer en el componente que es
- Si quieres hacer uno nuevo es generando un archivo y si tienes los snippets puedes escribir `tsrafce` para que te autogenere el componente
- React funciona medio raro, tienes que usar hooks pa hacer cosas interactivas, pero en si lo importante es lo que viene en el return, eso es el cuerpo del html
- Cualquier duda me dices