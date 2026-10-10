# Tarea: Mi componente interactivo

## Componente elegido

Una lista de tareas que permite agregar actividades, marcarlas como completadas y eliminarlas.

## Version 1: solo DOM

- Qué agregué: un título modificado desde JavaScript y dos tareas creadas con createElement().
- Por qué: para comprobar cómo mostrar contenido mediante el DOM.
- Qué cambió: al cargar la página aparecen las tareas definidas en JavaScript. El formulario todavía no tiene eventos programados.

```js
const titulo = document.querySelector("#titulo");
titulo.textContent = "Mis tareas pendientes";

const listaTareas = document.querySelector("#listaTareas");

const tareas = ["Estudiar JavaScript", "Completar el laboratorio"];

tareas.forEach((nombre) => {
  const li = document.createElement("li");
  li.textContent = nombre;
  listaTareas.appendChild(li);
});
```

## Version 2: con eventos

- Qué agregué: eventos submit para agregar tareas, input para mostrar una vista previa y click para completarlas o eliminarlas. También incorporé la validación del campo vacío.
- Por qué: para que la lista responda a las acciones del usuario.
- Qué cambió: ahora se pueden agregar, completar y eliminar tareas sin recargar la página. Si el campo está vacío, aparece un mensaje de error visible.

```js
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
```

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase
