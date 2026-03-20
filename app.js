// Variables globales

const formularioUI = document.querySelector("#formulario");
const listaActividadesUI = document.getElementById("listaActividades");
let arrayActividades = [];

// Funciones

const CrearItem = (actividad) => {
  let item = {
    actividad: actividad,
    estado: false
  };

  arrayActividades.push(item);

  return item;
};

const GuardarDB = (actividad) => {};
// EventListener

formularioUI.addEventListener("submit", (e) => {
  e.preventDefault();
  let actividadUI = document.querySelector("#actividad").value;

  CrearItem(actividadUI);

  formularioUI.reset();
});
