"use strict";

const tu_nombre = prompt("CUAL ES TU NOMBRE?");
alert("Genial " + tu_nombre + ", gracias por tomarte unos minutos");

const nombre = "si";
const edad = "si";
const estudios = "si";
const trabajos = "si";

let contador_good = 0;
let contador_mal = 0;

let continuar;
while (continuar != "no") {
  const preg_nombre = prompt("¿Mi nombre completo es Orlando Stevens?");
  if (nombre.toLowerCase() === preg_nombre.toLowerCase()) {
    alert("very good");
    console.log("very good");
    contador_good += 1;
  } else {
    alert("respuesta incorrecta");
    console.log("respuesta incorrecta");
    contador_mal += 1;
  }

  const preg_edad = prompt("¿mi edad es 36 años?");

  if (edad.toLowerCase() === preg_edad.toLowerCase()) {
    alert("very good");
    console.log("very good");
    contador_good += 1;
  } else {
    alert("respuesta incorrecta");
    console.log("respuesta incorrecta");
    contador_mal += 1;
  }
  const preg_estudios = prompt("¿Estudie en Idat?");
  if (estudios.toLowerCase() === preg_estudios.toLowerCase()) {
    alert("very good");
    console.log("very good");
    contador_good += 1;
  } else {
    alert("respuesta incorrecta");
    console.log("respuesta incorrecta");
    contador_mal += 1;
  }

  const preg_trabajos = prompt("Trabaje en CYBER 105?");

  if (trabajos.toLowerCase() === preg_trabajos.toLowerCase()) {
    alert("very good");
    console.log("very good");
    contador_good += 1;
  } else {
    alert("respuesta incorrecta");
    console.log("respuesta incorrecta");
    contador_mal += 1;
  }

  continuar = prompt("DESEA VOLVER A INTENTARLO?🤷‍♂️🐱‍👤");
}

alert(contador_good + " respuestas correctas");
alert(contador_mal + " respuestas incorrectas");
