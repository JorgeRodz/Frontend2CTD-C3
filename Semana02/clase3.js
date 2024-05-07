// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio


/*
Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
- querySelector()
- querySelectorAll()
*/

// Obtenemos el titulo principal


// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo


// nos traemos ahora un listado de nodos 👇


// hacemos un selector más específico👇

/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.


// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.


// vamos a practiacar con ForEach


// for (const noticia of articulos) {


// 💪🏼 Ahora llevemos esto un paso adelante!
// Vamos a interactuar con el DOM para agregarle mas estilos a nuestro sitio.
// 👇 Primero capturemos todos los elementos que vamos a modificar.




/* ---------------------------- Editado los ITEMS --------------------------- */
// 👇 Acá podemos ver todas las propiedades CSS que podemos modificar con JS



/* ----------------------------- Editando clases ---------------------------- */

// vamos probando uno a uno los métodos

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
function elegirTema() {

}
elegirTema();
