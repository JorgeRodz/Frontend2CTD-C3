/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt("Con el debido respeto que usted merece, te pido de favor ingresar tu nombre: ");
  if (nombre === null) return;

  let edad = prompt("Con el debido respeto que usted merece, te pido de favor ingrese su edad: ");
  if (edad === null) return;

  let ciudad = prompt("Sin animos de lucro le piedo de favor que ingrese la ciudad en que radica: ");
  if (ciudad === null) return;

  let interesPorJs = confirm("¿Te interesa el fabulo lenguaje de Javascript?");

  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = interesPorJs ? "Sí" : "No";
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").textContent = datosPersona.nombre;
  document.querySelector("#edad").textContent = datosPersona.edad == 0 ? "" : datosPersona.edad;
  document.querySelector("#ciudad").textContent = datosPersona.ciudad;
  document.querySelector("#javascript").textContent = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");
  fila.innerHTML = ""; // Limpiar contenido previo
  listado.forEach((materia) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "caja";
    tarjeta.innerHTML = `
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
      <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
      <p class="bimestre">Bimestre: ${materia.bimestre}</p>
    `;
    fila.appendChild(tarjeta);
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 document.body.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let isCursorInsideCard = false;

const cardElement = document.querySelector("#card");

cardElement.addEventListener("mouseenter", () => {
  isCursorInsideCard = true;
});

cardElement.addEventListener("mouseleave", () => {
  isCursorInsideCard = false;
});

document.addEventListener("keypress", (event) => {
  if (isCursorInsideCard && event.key.toLowerCase() === "f") {
    document.querySelector("#sobre-mi").classList.toggle("oculto");
  }
});
