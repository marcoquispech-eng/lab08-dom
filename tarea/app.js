// Version 1: solo DOM
const titulo = document.querySelector("#titulo");
titulo.textContent = "Mis tareas pendientes";

const listaTareas = document.querySelector("#listaTareas");

const tareas = ["Estudiar JavaScript", "Completar el laboratorio"];

tareas.forEach((nombre) => {
  const li = document.createElement("li");
  li.textContent = nombre;
  listaTareas.appendChild(li);
});
