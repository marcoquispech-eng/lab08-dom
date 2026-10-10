// Version 2: con eventos
const titulo = document.querySelector("#titulo");
titulo.textContent = "Mis tareas pendientes";

const formTarea = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const vistaPrevia = document.querySelector("#vistaPrevia");
const mensaje = document.querySelector("#mensaje");
const listaTareas = document.querySelector("#listaTareas");

// Mostrar lo que escribe el usuario
nombreTarea.addEventListener("input", () => {
  vistaPrevia.textContent = "Tarea: " + nombreTarea.value;
});

// Agregar una tarea
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (nombreTarea.value.trim() === "") {
    mensaje.textContent = "Escribe una tarea antes de agregar.";
    mensaje.classList.add("error");
  } else {
    mensaje.textContent = "";
    mensaje.classList.remove("error");

    const li = document.createElement("li");
    const texto = document.createElement("span");
    texto.textContent = nombreTarea.value.trim();

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnCompletar.addEventListener("click", () => {
      texto.style.textDecoration = "line-through";
      btnCompletar.disabled = true;
    });

    btnEliminar.addEventListener("click", () => {
      listaTareas.removeChild(li);
    });

    li.appendChild(texto);
    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);

    formTarea.reset();
    vistaPrevia.textContent = "";
  }
});
