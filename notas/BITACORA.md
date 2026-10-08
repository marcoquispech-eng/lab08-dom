# Bitácora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Chrome.

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción                  | Qué cambió en la pantalla                 | Se mantiene al recargar (Sí/No) |
| ---------------------------- | ----------------------------------------- | ------------------------------- |
| textContent desde la consola | El título cambió a Hola desde la consola. | No                              |
| textContent desde app.js     | El título cambió a Hola TECSUP.           | Sí                              |
| style.color                  | El título se mostró en azul.              | Sí                              |
| classList.add                | El párrafo obtuvo un fondo amarillo.      | Sí                              |
| createElement + appendChild  | Se agregó JavaScript a la lista.          | Sí                              |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara                        | Cuánto suma por acción |
| -------------- | -------------------------------------------- | ---------------------- |
| click          | Hacer un clic en el botón.                   | 1                      |
| dblclick       | Hacer doble clic en el botón.                | 1                      |
| mouseover      | Mover el puntero sobre el botón desde fuera. | 1                      |

evento.type mostró el tipo de evento: click, dblclick o mouseover.
evento.target mostró el botón que recibió el evento: Sumar 1.

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Qué pasó en la pantalla                                | Se recargó la página (Sí/No) |
| --------------------------------------- | ------------------------------------------------------ | ---------------------------- |
| Escribir en el campo nombre             | El saludo cambió mientras escribía el nombre.          | No                           |
| Enviar sin preventDefault               | La página se recargó y el mensaje Enviado desapareció. | Sí                           |
| Enviar con preventDefault, correo sin @ | Apareció Correo no valido: falta @ en rojo.            | No                           |
| Enviar con preventDefault, correo con @ | Apareció Enviado junto al correo ingresado, sin rojo.  | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | -----: | ------------------- | -----------------: |
| laptop  | Laptop  |   2500 | Laptop - S/ 2500.00 |            1875.00 |
| mouse   | Mouse   |     45 | Mouse - S/ 45.00    |              33.75 |
| teclado | Teclado |    120 | Teclado - S/ 120.00 |              90.00 |
| monitor | Monitor |    680 | Monitor - S/ 680.00 |             510.00 |

La clase Producto permite crear productos con los mismos atributos y métodos, evitando repetir código. Podemos agregar nuevos productos desde JavaScript y mostrarlos en la página sin modificar el HTML.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba                           | Total que muestra la página                              | ¿Correcto? Sí/No |
| -------------------------------- | -------------------------------------------------------- | ---------------- |
| Agregar Cuaderno: S/ 12.50       | S/ 12.50                                                 | Sí               |
| Agregar Lapicero: S/ 3.20        | S/ 15.70                                                 | Sí               |
| Agregar Mochila: S/ 89.90        | S/ 105.60                                                | Sí               |
| Agregar un producto sin Number() | No se actualiza el total; aparece un error en la consola | No               |

| Pieza  | Línea de tu código donde aparece                      | ¿Para qué sirve?                                            |
| ------ | ----------------------------------------------------- | ----------------------------------------------------------- |
| DOM    | const li = document.createElement("li");              | Crea un elemento para mostrar el producto en la página.     |
| Evento | formProducto.addEventListener("submit", (evento) => { | Ejecuta el código cuando se envía el formulario.            |
| Objeto | const carrito = new Carrito();                        | Guarda los productos agregados y permite calcular el total. |

Al quitar Number(), el precio queda como texto y aparece un error al usar toFixed(). Al restaurarlo, el precio se convierte en número y el carrito funciona correctamente.
