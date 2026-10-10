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

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase
